import { useEffect, useState } from 'react'

import { useLazyGetRestaurantByIdQuery } from '../api/restaurants'

import RestaurantDetails from '../components/RestaurantDetails'
import RestaurantImage from '../components/RestaurantImage'

const Restaurant = () => {
    const [getRestaurant] = useLazyGetRestaurantByIdQuery()
    const [restaurant, setRestaurant] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getRestaurant(window.location.href.split('/')[4])
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
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Restaurant
