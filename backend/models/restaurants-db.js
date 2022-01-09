const db = require('../db')

class restaurantsDB {
    selectAllRestaurants(callback) {
        db.query(
            'SELECT * FROM restaurants; SELECT * FROM restaurant_photos; SELECT * FROM contact_details; SELECT * FROM open_hours; SELECT * FROM restaurant_categories',
            callback
        )
    }
}

module.exports = restaurantsDB
