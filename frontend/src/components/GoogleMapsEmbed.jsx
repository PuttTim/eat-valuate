import { useEffect } from 'react'

import config from '../../../config.json'

const GoogleMapsEmbed = props => {
    useEffect(() => {
        console.log(
            `http://www.google.com/maps/embed/v1/place?key=${
                config.API_KEY
            }&q=${props.location.replace(/\s+/, '+')}`
        )
    }, [])
    return (
        <iframe
            width="600"
            height="450"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${
                config.API_KEY
            }
    &q=${props.location.replace(/\s+/, '+')}`}></iframe>
    )
}

export default GoogleMapsEmbed
