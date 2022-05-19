import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// images
import logo from '../assets/images/logo.png';

const pages = ['Home', 'Contact Us', 'About Us'];
const setting = ['Regester Now', 'Sign in'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: {md: '60px', lg: '100px' },
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                width: { xs: '100%', md: 'auto' },
              }}
            >
              <img
                src={logo}
                alt="fly fair international logo"
                width="100"
                height="40"
              />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'end',
                display: { xs: 'flex', md: 'none' },
                width: '100%',
              }}
            >
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  borderRadius: 1,
                  padding: '5px 10px',
                  fontSize: 'px',
                }}
                className="icon-button"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleOpenUserMenu}
              >
                {pages.map((page, ind) => (
                  <MenuItem key={ind} onClick={handleOpenUserMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                {setting.map((page, ind) => (
                  <MenuItem key={ind} onClick={handleOpenUserMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, ind) => (
                <Button
                  key={ind}
                  onClick={handleOpenUserMenu}
                  sx={{
                    px: 3,
                    color: 'black',
                    display: 'block',
                    position: 'relative',
                  }}
                  className={ind === 0 ? 'active-item' : ''}
                >
                  {page}
                  {ind === 0 ? <span></span> : ''}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleOpenUserMenu}
                sx={{
                  color: 'black',
                  display: 'block',
                  border: '2px solid  #003566',
                  mx: 1,
                  px: {},
                }}
                className="sign-button"
              >
                Register Now
              </Button>
              <Button
                onClick={handleOpenUserMenu}
                sx={{
                  color: 'black',
                  display: 'block',
                  border: '2px solid  #003566',
                  mx: 1,
                  px: '20px',
                }}
                className="sign-button"
              >
                Sign in
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
};
export default ResponsiveAppBar;
