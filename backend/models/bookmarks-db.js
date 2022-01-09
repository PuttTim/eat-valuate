const db = require('../db')

class bookmarksDB {
    selectBookmarkedRestaurants(user_id, callback) {
        db.query(
            'SELECT DISTINCT restaurants.* FROM restaurants LEFT JOIN bookmarks ON bookmarks.user_id = ? WHERE id = bookmarks.restaurant_id',
            user_id,
            callback
        )
    }

    insertBookmark(user_id, restaurant_id, callback) {
        db.query(
            'INSERT INTO bookmarks (user_id, restaurant_id) VALUES (?, ?)',
            [user_id, restaurant_id],
            callback
        )
    }

    deleteBookmark(user_id, restaurant_id, callback) {
        db.query(
            'DELETE FROM bookmarks WHERE user_id = ? AND restaurant_id = ?',
            [user_id, restaurant_id],
            callback
        )
    }
}

module.exports = bookmarksDB
