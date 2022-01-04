'use strict'

const db = require('../db')

class usersDB {
    getUser(id, callback) {
        db.query('SELECT * FROM users WHERE id = ?', id, callback)
    }

    createUser(user) {
        try {
            return db.query(
                'INSERT INTO users (username, email, password, fullname, gender, zipcode, address, country, mobile_number, profile_picture_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    user.username,
                    user.email,
                    user.password,
                    user.fullname,
                    user.gender,
                    user.zipcode,
                    user.address,
                    user.country,
                    user.mobile_number,
                    user.profile_picture_path
                ]
            )
        } catch (error) {
            return error
        }
    }
}

module.exports = usersDB
