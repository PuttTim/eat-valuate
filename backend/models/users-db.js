const db = require('../db')

class usersDB {
    selectUser(id, callback) {
        db.query(
            'SELECT users.username, users.fullname, users.country, users.profile_picture_path, AVG(reviews.rating) AS avg_rating FROM users LEFT JOIN reviews ON users.id = reviews.user_id WHERE users.id = ?',
            id,
            callback
        )
    }

    insertUser(user, callback) {
        db.query(
            'INSERT INTO users (username, email, password, fullname, gender, zipcode, city, country, mobile_number, profile_picture_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                user.username,
                user.email,
                user.password,
                user.fullname,
                user.gender,
                user.zipcode,
                user.city,
                user.country,
                user.mobile_number,
                user.profile_picture_path
            ],
            callback
        )
    }

    selectUserCredentials(username, callback) {
        db.query(
            'SELECT username, password FROM users WHERE username = ?',
            username,
            callback
        )
    }

    deleteUser(id, callback) {
        db.query('DELETE FROM users WHERE id = ?', id, callback)
    }

    updateUser(body, id, callback) {
        // MySQL-nodejs is able to match key and value pairs in the query.
        // In this case, all the keys of request.body is parsed with its value.
        // i.e if request.body has a "zipcode" key, it will change the query to "UPDATE users SET zipcode = request.body.zipcode"
        db.query('UPDATE users SET ? WHERE id = ?', [body, id], callback)
    }
}

module.exports = usersDB
