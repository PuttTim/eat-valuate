import { useEffect } from 'react'
import { Button } from '@mui/material'
import { useGetRestaurantsQuery } from '../api/restaurants'
import { useGetUsersQuery, useLazyGetUsersQuery } from '../api/users'
import { useSelector, useDispatch } from 'react-redux'

import Toast from '../components/Toast'
import { createToast } from '../app/slices/snackbar'

const Home = () => {
    const dispatch = useDispatch()

    const handleButton = () => {
        dispatch(
            createToast({
                open: true,
                message: 'New Snackbar',
                severity: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'left' }
            })
        )
    }

    return (
        <div>
            <Toast></Toast>
            <Button onClick={handleButton}>New Snackbar</Button>
        </div>
    )
}

export default Home
