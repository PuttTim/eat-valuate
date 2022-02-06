import { useEffect, useState } from 'react'

import { Container, Grid } from '@mui/material'

import { useGetRestaurantsQuery } from '../api/restaurants'
import RestaurantCard from '../components/RestaurantCard'

const RestaurantList = () => {
    const { data: restaurantData, isLoading } = useGetRestaurantsQuery()

    useEffect(() => {
        console.log(restaurantData)
    }, [isLoading, restaurantData])

    return (
        <Container maxWidth="lg" sx={{ mt: '50px' }}>
            {isLoading ? (
                <></>
            ) : (
                <Grid container>
                    {restaurantData.map((restaurant, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <RestaurantCard data={restaurant} />
                            </Grid>
                        )
                    })}
                </Grid>
            )}
        </Container>
    )
}

export default RestaurantList
