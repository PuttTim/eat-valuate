import { useEffect } from 'react'
import { Button } from '@mui/material'
import { useGetRestaurantsQuery } from '../api/restaurants'
import { useGetUsersQuery, useLazyGetUsersQuery } from '../api/users'
import { useSelector, useDispatch } from 'react-redux'

import Toast from '../components/Toast'
import { createToast } from '../app/slices/toast'

const Home = () => {
    return <div></div>
}

export default Home
