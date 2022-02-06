import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Image from 'material-ui-image'
import { Paper, Button, Box, Card } from '@mui/material'

const RestaurantImage = () => {
    const images = [
        'https://images.unsplash.com/photo-1515668166700-4c11137632fc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920',
        'https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920'
    ]

    return (
        <Box sx={{ width: '100%', maxHeight: '540px' }}>
            <Carousel>
                {images.map((image, index) => {
                    return (
                        <Image
                            imageStyle={{
                                width: '100%',
                                maxHeight: '540px'
                            }}
                            src={image}
                            key={index}
                        />
                    )
                })}
            </Carousel>
        </Box>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">Check it out!</Button>
        </Paper>
    )
}

export default RestaurantImage
