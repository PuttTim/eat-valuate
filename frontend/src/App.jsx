import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Profile from './pages/Profile'
import Restaurant from './pages/Restaurant'
import PageNotFound from './pages/PageNotFound'
import './index.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App
