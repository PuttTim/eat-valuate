import { useEffect, useState } from 'react'

import { Divider, Typography } from '@mui/material'

import { useLazyGetRestaurantByIdQuery } from '../api/restaurants'

import RestaurantDetails from '../components/RestaurantDetails'
import RestaurantImage from '../components/RestaurantImage'
import ReviewList from '../components/ReviewList'

const Restaurant = () => {
    const [getRestaurant] = useLazyGetRestaurantByIdQuery()
    const [restaurant, setRestaurant] = useState({})
    const [loaded, setLoaded] = useState(false)

    const restaurant_id = window.location.href.split('/')[4]

    useEffect(() => {
        getRestaurant(restaurant_id)
            .unwrap()
            .then(response => {
                setRestaurant(response)
                setLoaded(true)
            })
    }, [])

    return (
        <>
            {loaded ? (
                <>
                    <RestaurantImage photo={restaurant.photo} />
                    <RestaurantDetails restaurant={restaurant} />

                    <ReviewList id={restaurant_id} />
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Restaurant
