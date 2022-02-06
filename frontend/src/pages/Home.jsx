import { Divider, Container, Skeleton, Typography } from '@mui/material'

import RestaurantList from '../components/RestaurantList'
import RestaurantImage from '../components/RestaurantImage'

import { useGetRestaurantsQuery } from '../api/restaurants'

const Home = () => {
    const { data: restaurantData, isLoading } = useGetRestaurantsQuery()

    const allPhotos = []

    restaurantData.map(restaurant => {
        restaurant.photo.map(photo => {
            allPhotos.push(photo)
        })
    })

    return (
        <>
            {isLoading ? (
                <Skeleton width="100%" height="540px" />
            ) : (
                <RestaurantImage photo={allPhotos} />
            )}
            <Container maxWidth="lg" sx={{ mb: '20px' }}>
                <Typography variant="h3" align="center" sx={{ mt: '20px' }}>
                    All Restaurants
                </Typography>
                <Divider
                    variant="middle"
                    sx={{ borderBottomWidth: 5, mt: '10px' }}
                />
                <RestaurantList />
            </Container>
        </>
    )
}

export default Home
