const db = require('../db')

class restaurantsDB {
    selectAllRestaurants(callback) {
        db.query(
            'SELECT restaurants.id, restaurants.name, restaurants.location, restaurants.pricing, restaurant_photos.path AS photo, GROUP_CONCAT(DISTINCT contact_details.website) AS website,  GROUP_CONCAT(DISTINCT contact_details.email) AS email,  GROUP_CONCAT(DISTINCT contact_details.mobile_number) AS mobile_number, GROUP_CONCAT( open_hours.day) AS days, GROUP_CONCAT( open_hours.opening) AS opening, GROUP_CONCAT( open_hours.closing) AS closing, GROUP_CONCAT(DISTINCT categories.name) AS category, COUNT(DISTINCT reviews.id) AS review_count, AVG(DISTINCT reviews.rating) AS avg_rating FROM restaurants LEFT JOIN restaurant_photos ON restaurant_photos.restaurant_id = restaurants.id LEFT JOIN contact_details ON contact_details.restaurant_id = restaurants.id LEFT JOIN restaurant_categories ON restaurant_categories.restaurant_id = restaurants.id LEFT JOIN categories ON categories.id = restaurant_categories.category_id LEFT JOIN reviews ON reviews.restaurant_id = restaurants.id LEFT JOIN open_hours ON open_hours.restaurant_id = restaurants.id GROUP BY restaurants.id',
            callback
        )
    }
}

module.exports = restaurantsDB
