const db = require('../db')

class restaurantsDB {
    selectAllRestaurants(callback) {
        db.query(
            'SELECT * FROM restaurants WHERE id = 1; SELECT * FROM restaurant_photos WHERE restaurant_id = 1; SELECT * FROM contact_details WHERE restaurant_id = 1; SELECT * FROM open_hours WHERE restaurant_id = 1; SELECT * FROM restaurant_categories WHERE restaurant_id = 1',
            callback
        )
    }
}

module.exports = restaurantsDB
