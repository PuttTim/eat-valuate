import { useState, useEffect } from 'react'
import {
    AppBar,
    Container,
    Typography,
    Toolbar,
    Button,
    Stack,
    Menu,
    MenuItem,
    Box,
    IconButton,
    Tooltip,
    Avatar
} from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import { spacing } from '@mui/system'
import '../index.css'

const Navbar = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget)
    }

    const handleMouseOver = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    async function navigateTo(destination) {
        navigate(`/${destination}`)
    }

    useEffect(() => console.log(isAuthenticated), [isAuthenticated])

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

                        {isAuthenticated ? (
                            <Tooltip title="Profile">
                                <IconButton
                                    onClick={() => {
                                        setAuthenticated(!isAuthenticated)
                                    }}
                                    sx={{ p: 0 }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Button
                                onClick={() => {
                                    setAuthenticated(!isAuthenticated)
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

                        {isAuthenticated ? (
                            <Tooltip title="Profile">
                                <IconButton
                                    onClick={() => {
                                        navigateTo('profile')
                                    }}
                                    sx={{ p: 0 }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
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
