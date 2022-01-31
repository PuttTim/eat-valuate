import { useEffect } from 'react'
import { Button } from '@mui/material'
import { useGetRestaurantsQuery } from '../api/restaurants'
import { useGetUsersQuery, useLazyGetUsersQuery } from '../api/users'

const Home = () => {
    const { data, error, isLoading } = useGetUsersQuery('2')
    const [getUserById] = useLazyGetUsersQuery()
    const handleFetch = () => {
        getUserById(2)
            .unwrap()
            .then(response => {
                console.table(response)
            })
    }

    return (
        <>
            <Button variant="contained" onClick={handleFetch}>
                Fetch User 2
            </Button>
        </>
    )
}

export default Home
