'use strict'

const db = require('../db')

class usersDB {
    getUser(id) {
        try {
            await db.query('SELECT * FROM users WHERE id = ?', id)
        } catch (error) {}
    }

    createUser(user) {
        try {
            db.query(
                `INSERT INTO users (username, email, password, fullname, gender, zipcode, address, country, mobile_number, profile_picture_path) VALUES (? ? ? ? ? ? ? ? ? ?)`,
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
        } catch (error) {}
    }
}
