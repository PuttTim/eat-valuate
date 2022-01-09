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
        `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    )

    reviewsDB.insertReview(review, (error, results) => {
        if (error) {
            console.log(error)
        }
        console.log(results)
    })
}

module.exports = { createReview }
