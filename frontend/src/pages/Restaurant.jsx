import { useEffect, useState } from 'react'

import { Divider, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useGetRestaurantByIdQuery } from '../api/restaurants'

import RestaurantDetails from '../components/RestaurantDetails'
import RestaurantImage from '../components/RestaurantImage'
import ReviewList from '../components/ReviewList'
import ReviewModal from '../components/ReviewModal'

const Restaurant = () => {
    const userAuthentication = useSelector(state => state.auth)
    const restaurant_id = window.location.href.split('/')[4]
    const {
        data: restaurant = {},
        isLoading,
        error
    } = useGetRestaurantByIdQuery(restaurant_id)

    // useEffect(() => {
    //     getRestaurant(restaurant_id)
    //         .unwrap()
    //         .then(response => {
    //             setRestaurant(response)
    //             setLoaded(true)
    //         })
    // }, [])

    return (
        <>
            {isLoading != true ? (
                <>
                    <RestaurantImage photo={restaurant.photo} />
                    <RestaurantDetails restaurant={restaurant} />
                    <ReviewModal
                        restaurant_id={restaurant_id}
                        user={userAuthentication}
                    />
                    <ReviewList
                        restaurant_id={restaurant_id}
                        user={userAuthentication}
                    />
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Restaurant
