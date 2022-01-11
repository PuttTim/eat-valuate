const _restaurantsDB = require('../models/restaurants-db')

const restaurantsDB = new _restaurantsDB()

function getAllRestaurants(request, respond) {
    restaurantsDB.selectAllRestaurants((error, results) => {
        // console.log(results)
        if (error) {
            console.log(error)
            respond
                .status(400)
                .json({ error: 'This in practice, should never be executed' })
        }

        const photos = results[1].map(element => {
            return element.path
        })

        const contact = {
            website: results[2].map(element => {
                return element.website
            }),
            mobile_number: results[2].map(element => {
                return element.mobile_number
            }),
            email: results[2].map(element => {
                return element.email
            })
        }

        const opening = {
            days: results[3].map(element => {
                return element.day
            }),
            hours: results[3].map(element => {
                return `${element.opening} - ${element.closing}`
            })
        }

        const categories = results[4].map(element => {
            return element.category_id
        })

        respond.json({
            restaurant: results[0],
            photos: photos,
            contact: contact,
            opening: opening,
            categories: categories
        })
    })
}

module.exports = { getAllRestaurants }
