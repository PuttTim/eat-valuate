const _usersDB = require('../models/users-db')
const User = require('../models/user')
const argon2 = require('argon2')
const { v4: uuidv4 } = require('uuid')

const usersDB = new _usersDB()

const argonOptions = {}

function getUserById(request, respond) {
    let id = parseInt(request.params.id)
    console.log(id)
    usersDB.selectUser(id, (error, results) => {
        if (error || results.length === 0) {
            console.log(error)
            respond.status(409).json({ error: 'SQL Error' })
        } else if (results[0].username == null) {
            console.log(error)
            respond.status(404).json({ error: 'User not found' })
        } else {
            console.log(results)
            respond.json(results)
        }
    })
}

async function createUser(request, respond) {
    // Password hashing by argon2
    let password
    let file_name

    try {
        password = await argon2.hash(request.body.password, argonOptions)
    } catch (error) {
        console.log(error)
    }

    // Checks if the file is included in the form, if it is, create a file path and download the file to the uploads/users directory.
    if (request.files) {
        file_name = `/users/${uuidv4()}--${request.files.picture.name}`
        const upload_path = `./uploads${file_name}`
        request.files.picture.mv(upload_path, error => {
            if (error) {
                console.log(error)
            }
        })
    }

    // User creation using the User class
    const user = new User(
        null,
        request.body.username,
        request.body.email,
        password,
        request.body.fullname,
        request.body.gender,
        request.body.zipcode,
        request.body.address,
        request.body.country,
        request.body.mobile_number,
        '/users/default_profile_picture.png'
    )

    // SQL Query with the user defined above, with a callback to send responses.
    usersDB.insertUser(user, (error, results) => {
        if (error) {
            console.log(error)
            if (error.errno === 1062) {
                respond.status(409).json({ error: 'Duplicate username' })
            } else {
                respond.status(400).json({ error: 'SQL Error' })
            }
        } else if (results) {
            console.log(results)
            respond.sendStatus(202)
        }
    })
}

function loginUser(request, respond) {
    usersDB.findUserCredentials(
        request.body.username,
        async (error, results) => {
            // Checks if the username exists in the database, 404 if it does not.
            if (error || results.length == 0) {
                respond.status(404).json({ error: 'User not found' })
            }
            // If the user exists then verifies the password
            else {
                try {
                    // Verifies the password with argon2
                    if (
                        await argon2.verify(
                            results[0].password,
                            request.body.password
                        )
                    ) {
                        // If the password matches, respond with a 200 and welcome the user
                        respond.status(200).json({
                            message: `Welcome ${request.body.username}`
                        })
                    } else {
                        // If the password does not match, respond with a 403
                        respond.status(403).json({ message: 'Wrong Password' })
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    )
}

function deleteUser(request, respond) {
    const id = parseInt(request.params.id)

    usersDB.deleteUser(id, (error, results) => {
        if (error) {
            console.log(error)
            return respond.status(400).json(error)
        }
        respond.status(200).json({ message: 'User deleted' })
    })
}

async function updateUser(request, respond) {
    // If the password is being updated, replace the body's password with a new hashed password.
    if (request.body.password) {
        try {
            request.body.password = await argon2.hash(
                request.body.password,
                argonOptions
            )
        } catch (error) {
            console.log(error)
        }
    }

    // Checks if the file is included in the form, if it is, create a file path and download the file to the uploads/users directory.
    if (request.files) {
        file_name = `/users/${uuidv4()}--${request.files.picture.name}`
        const upload_path = `./uploads${file_name}`
        request.body.profile_picture_path = upload_path
        request.files.picture.mv(upload_path, error => {
            if (error) {
                console.log(error)
            }
        })
    }

    // Request is parsed in whole and usersDB will take out .body and .params.id
    usersDB.updateUser(request, (error, results) => {
        if (error) {
            console.log(error)
            return respond.status(400).json({ error: 'SQL Error' })
        }
        respond.status(200).json({ message: 'User updated' })
    })
}

module.exports = {
    getUserById,
    createUser,
    loginUser,
    deleteUser,
    updateUser
}
