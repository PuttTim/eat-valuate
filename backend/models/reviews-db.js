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

    selectRestaurantReviews(restaurant_id, callback) {
        db.query(
            'SELECT reviews.id, reviews.content, reviews.rating, reviews.posted_at, reviews.price, reviews.is_edited, users.username FROM reviews LEFT JOIN users ON users.id = reviews.user_id WHERE restaurant_id = ?',
            restaurant_id,
            callback
        )
    }

    selectUserReviews(user_id, callback) {
        db.query('SELECT * FROM reviews WHERE user_id = ?', user_id, callback)
    }

    selectReview(id, callback) {
        db.query('SELECT * FROM reviews WHERE id = ?', id, callback)
    }

    deleteReview(id, callback) {
        db.query('DELETE FROM reviews WHERE id = ?', id, callback)
    }

    updateReview(request, callback) {
        db.query(
            'UPDATE reviews SET ? WHERE id = ?',
            [request.body, request.params.id],
            callback
        )
    }
}

module.exports = reviewsDB
