const _reviewsDB = require('../models/reviews-db')
const Review = require('../models/review')

const reviewsDB = new _reviewsDB()

function createReview(request, respond) {
    const time = new Date()

    const review = new Review(
        null,
        request.body.user_id,
        request.body.restaurant_id,
        request.body.content,
        request.body.rating,
        request.body.price,
        `${time.getUTCFullYear()}-${time.getUTCMonth()}-${time.getUTCDate()} ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`
    )

    reviewsDB.insertReview(review, (error, results) => {
        if (error) {
            console.log(error)
            respond.status(400).json({ error: 'SQL Error' })
        }
        respond.status(202).json({ message: 'Review created' })
    })
}

function getRestaurantReviews(request, respond) {
    reviewsDB.selectRestaurantReviews(
        parseInt(request.params.restaurant_id),
        (error, results) => {
            if (error) {
                console.log(error)
                respond.status(400).json({ error: 'SQL Error' })
            }
            respond.status(200).json(results)
        }
    )
}

function getUserReviews(request, respond) {
    reviewsDB.selectUserReviews(
        parseInt(request.params.user_id),
        (error, results) => {
            if (error) {
                console.log(error)
                respond.status(400).json({ error: 'SQL Error' })
            }
            respond.status(200).json(results)
        }
    )
}

function getReviewById(request, respond) {
    reviewsDB.selectReview(parseInt(request.params.id), (error, results) => {
        if (error) {
            console.log(error)
            respond.status(400).json({ error: 'SQL Error' })
        }
        respond.status(200).json(results[0])
    })
}

function deleteReview(request, respond) {
    reviewsDB.deleteReview(parseInt(request.params.id), (error, results) => {
        if (error) {
            console.log(error)
            return respond.status(400).json(error)
        }
        respond.status(200).json({ message: 'Review deleted' })
    })
}

function updateReview(request, respond) {
    const time = new Date()
    request.body.posted_at = `${time.getUTCFullYear()}-${time.getUTCMonth()}-${time.getUTCDate()} ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`
    request.body.is_edited = 1

    reviewsDB.updateReview(request, (error, results) => {
        if (error) {
            console.log(error)
            return respond.status(400).json({ error: 'SQL Error' })
        }
        respond.status(200).json({ message: 'Review updated' })
    })
}

module.exports = {
    createReview,
    getRestaurantReviews,
    getUserReviews,
    getReviewById,
    deleteReview,
    updateReview
}
