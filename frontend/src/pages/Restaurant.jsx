import { useEffect } from 'react'
import RestaurantDetails from '../components/RestaurantDetails'
import RestaurantImage from '../components/RestaurantImage'

const Restaurant = () => {
    useEffect(() => {
        console.log(window.location.href)
    }, [])

    return (
        <>
            <RestaurantImage />
            <RestaurantDetails />
        </>
    )
}

export default Restaurant
