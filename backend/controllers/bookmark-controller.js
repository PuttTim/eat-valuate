const _bookmarksDB = require('../models/bookmarks-db')

const bookmarksDB = new _bookmarksDB()

// Creates a bookmark using the user's id and restaurant id
function createBookmark(request, respond) {
    bookmarksDB.insertBookmark(
        request.body.user_id,
        request.body.restaurant_id,
        (error, results) => {
            if (error) {
                console.log(error)
                respond.status(400).json({ error: 'SQL Error' })
            }
            respond.status(202).json({ message: 'Bookmark created' })
        }
    )
}

// Gets all of the User's bookmarked restaurants
function getUserBookmarkedRestaurants(request, respond) {
    bookmarksDB.selectBookmarkedRestaurants(1, (error, results) => {
        if (error) {
            console.log(error)
            respond.status(400).json({ error: 'SQL Error' })
        }
        console.log(results)
        respond.status(200).json(results)
    })
}

function deleteBookmark(request, respond) {
    bookmarksDB.deleteBookmark(
        request.body.user_id,
        request.body.restaurant_id,
        (error, results) => {
            if (error) {
                console.log(error)
                return respond.status(400).json({ error: 'SQL Error' })
            }
            respond.status(200).json({ message: 'Bookmark deleted' })
        }
    )
}

module.exports = {
    createBookmark,
    getUserBookmarkedRestaurants,
    deleteBookmark
}
