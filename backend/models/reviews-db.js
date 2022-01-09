const db = require('../db')

class reviewsDB {
    insertReview(review, callback) {
        db.query(
            'INSERT INTO reviews (user_id, restaurant_id, content, rating, price, posted_at) VALUES (?, ?, ?, ?, ?, ?)',
            [
                review.user_id,
                review.restaurant_id,
                review.content,
                review.rating,
                review.price,
                review.posted_at
            ],
            callback
        )
    }
}

module.exports = reviewsDB
