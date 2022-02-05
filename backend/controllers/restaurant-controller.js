const _restaurantsDB = require('../models/restaurants-db')

const restaurantsDB = new _restaurantsDB()

function getAllRestaurants(request, respond) {
    restaurantsDB.selectAllRestaurants((error, results) => {
        const restaurantsList = []

        if (error) {
            console.log(error)
            respond
                .status(400)
                .json({ error: 'This in practice, should never be executed' })
        }
        results.map(restaurant => {
            const closing = restaurant.closing.split(',').slice(0, 7)
            const opening = restaurant.opening.split(',').slice(0, 7)
            const days = restaurant.days.split(',').slice(0, 7)
            const website = []
            restaurant.website.split(',').map(site => {
                if (site != 'None') {
                    website.push(site)
                }
            })
            const email = []
            restaurant.email.split(',').map(address => {
                if (address != 'None') {
                    email.push(address)
                }
            })
            const mobile_number = []
            restaurant.mobile_number.split(',').map(number => {
                if (number != 'None') {
                    mobile_number.push(number)
                }
            })
            restaurantsList.push({
                id: restaurant.id,
                name: restaurant.name,
                location: restaurant.location,
                pricing: restaurant.pricing,
                photo: restaurant.photo,
                website: website,
                email: email,
                mobile_number: mobile_number,
                days,
                opening,
                closing,
                category: restaurant.category.split(',').join(' • '),
                avg_rating: restaurant.avg_rating,
                review_count: restaurant.review_count
            })
        })
        respond.json(restaurantsList)
    })
}

module.exports = { getAllRestaurants }
