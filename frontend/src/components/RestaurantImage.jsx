import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Card } from '@mui/material'

const RestaurantImage = props => {
    const images = props.photo

    return (
        <Box>
            <Carousel>
                {images.map((image, index) => {
                    return (
                        <img
                            style={{
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
