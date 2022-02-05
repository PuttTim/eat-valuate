import { useState, useEffect } from 'react'
import {
    AppBar,
    Container,
    Toolbar,
    Button,
    Stack,
    Menu,
    MenuItem,
    Box,
    IconButton,
    Tooltip,
    Typography
} from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import '../index.css'

import { useSelector, useDispatch } from 'react-redux'
import { unauthenticateUser } from '../app/slices/auth'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const userAuthentication = useSelector(state => state.auth)

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget)
    }

    const handleMouseOver = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        dispatch(unauthenticateUser())
        localStorage.removeItem('userData')
        setAnchorElUser(null)
    }

    async function navigateTo(destination) {
        navigate(`/${destination}`)
    }

    useEffect(() => {
        console.table(userAuthentication)
        if (userAuthentication.auth) {
            setAnchorElUser(null)
        }
    }, [userAuthentication])

    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' }
                        }}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' }
                            }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: '#000000' }}>
                                <MenuIcon />
                            </IconButton>
                            <Button
                                variant="text"
                                onClick={() => {
                                    navigateTo('')
                                }}
                                disableRipple
                                sx={{
                                    fontFamily: 'Montserrat Alternates',
                                    fontSize: '20px',
                                    display: { xs: 'flex', md: 'none' }
                                }}>
                                eat-valuate
                            </Button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}>
                                <MenuItem
                                    onClick={() => {
                                        handleCloseNavMenu()
                                        navigateTo('')
                                    }}>
                                    Home
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        handleCloseNavMenu()
                                        navigateTo('restaurants/')
                                    }}>
                                    Restaurants
                                </MenuItem>
                            </Menu>
                        </Box>

                        {userAuthentication.authenticated ? (
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    xs: 'flex',
                                    md: 'none'
                                }}>
                                <Tooltip title="User Profile">
                                    <Button
                                        disableRipple
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}>
                                        {userAuthentication.userData.username}
                                    </Button>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}>
                                    <MenuItem>
                                        <Button
                                            onClick={() => {
                                                navigateTo('profile')
                                            }}>
                                            Profile
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        ) : (
                            <Button
                                onClick={() => {
                                    navigateTo('login')
                                }}>
                                Login
                            </Button>
                        )}
                    </Box>

                    {/* Desktop */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' }
                            }}>
                            <Button
                                variant="text"
                                onClick={() => {
                                    navigateTo('')
                                }}
                                disableRipple
                                sx={{
                                    fontFamily: 'Montserrat Alternates',
                                    fontSize: '25px',
                                    display: { xs: 'none', md: 'flex' }
                                }}>
                                eat-valuate
                            </Button>
                            <Button
                                variant="text"
                                onClick={() => {
                                    navigateTo('')
                                }}
                                disableRipple
                                sx={{
                                    fontSize: '20px',
                                    marginLeft: '20px'
                                }}>
                                Home
                            </Button>

                            <Stack
                                onMouseEnter={handleMouseOver}
                                direction="row"
                                spacing={1}
                                sx={{ marginLeft: '20px' }}>
                                <Button
                                    variant="text"
                                    disableRipple
                                    sx={{
                                        fontSize: '20px'
                                    }}>
                                    Restaurants
                                    {Boolean(anchorEl) ? (
                                        <ArrowDropUpIcon
                                            sx={{
                                                color: '#000000',
                                                fontSize: '36px'
                                            }}
                                        />
                                    ) : (
                                        <ArrowDropDownIcon
                                            sx={{
                                                color: '#000000',
                                                fontSize: '36px'
                                            }}
                                        />
                                    )}
                                </Button>

                                <Menu
                                    autoFocus={false}
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        onMouseLeave: handleClose
                                    }}>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose()
                                            navigateTo('restaurants/top')
                                        }}>
                                        Top Restaurants
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose()
                                            navigateTo('restaurants')
                                        }}>
                                        All Restaurants
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose()
                                            navigateTo('restaurants/search')
                                        }}>
                                        Search Restaurants
                                    </MenuItem>
                                </Menu>
                            </Stack>
                        </Box>

                        {userAuthentication.authenticated ? (
                            <Box
                                sx={{
                                    flexGrow: 0,
                                    display: { xs: 'none', md: 'flex' }
                                }}>
                                <Tooltip title="User Profile">
                                    <Button
                                        onClick={() => {
                                            navigateTo('profile')
                                        }}>
                                        {userAuthentication.userData.username}
                                    </Button>
                                </Tooltip>
                                <Button onClick={handleLogout}> Logout</Button>
                            </Box>
                        ) : (
                            <Button
                                onClick={() => {
                                    navigateTo('login')
                                }}>
                                Login / Register
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
