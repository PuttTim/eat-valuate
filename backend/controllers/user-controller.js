const _usersDB = require('../models/users-db')
const User = require('../models/user')
const argon2 = require('argon2')

const usersDB = new _usersDB()

const argonOptions = {}

function getUserById(request, respond) {
    let id = parseInt(request.params.id)
    console.log(id)
    usersDB.selectUser(id, (error, results) => {
        if (error || results.length === 0) {
            respond.json(error)
        }
        respond.json(results)
    })
}

async function createUser(request, respond) {
    console.log(request.body.gender)

    console.log(argonOptions)

    let password
    try {
        password = await argon2.hash(request.body.password, argonOptions)
    } catch (error) {
        console.log(error)
    }
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
        request.body.profile_picture_path
    )

    console.log(password)

    usersDB.insertUser(user, (error, results) => {
        if (error) {
            console.log(error)
        } else if (results) {
            console.log(results)
        }
    })
}

module.exports = { getUserById, createUser }
