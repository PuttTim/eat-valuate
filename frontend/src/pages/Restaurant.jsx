import { useEffect } from 'react'

const Restaurant = () => {
    useEffect(() => {
        console.log(window.location.href)
    }, [])

    return (
        <div>
            <h1>{window.location.href}</h1>
        </div>
    )
}

export default Restaurant
