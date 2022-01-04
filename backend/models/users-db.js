const db = require('../db')

class usersDB {
    selectUser(id, callback) {
        db.query('SELECT * FROM users WHERE id = ?', id, callback)
    }

    insertUser(user, callback) {
        db.query(
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
            ],
            callback
        )
    }
}

module.exports = usersDB
