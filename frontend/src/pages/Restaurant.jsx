import { useEffect } from 'react'
import RestaurantDetails from '../components/RestaurantDetails'

const Restaurant = () => {
    useEffect(() => {
        console.log(window.location.href)
    }, [])

    return <RestaurantDetails />
}

export default Restaurant
