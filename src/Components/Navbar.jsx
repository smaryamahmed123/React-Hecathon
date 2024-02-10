import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { CustomizedBadges } from './Icons';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const appBar = ()=>{
    return(
      <>
              <Link to="/home" style={{ textDecoration: 'none', color: 'white', fontWeight: 'inherit', fontSize: 20, fontFamily: 'fantasy'}}>
                Home
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: 'inherit', fontSize: 20, fontFamily: 'fantasy'}}>
                Contact
              </Link>
              <Link to="/services" style={{ textDecoration: 'none', color: 'white', fontWeight: 'inherit', fontSize: 20, fontFamily: 'fantasy'}}>
                Services
              </Link>
              <Link to="/aboutus" style={{ textDecoration: 'none', color: 'white', fontWeight: 'inherit', fontSize: 20, fontFamily: 'fantasy'}}>
                AboutUs
              </Link>
              <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton>
              <CustomizedBadges></CustomizedBadges>
              </IconButton>
              </Link>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  localStorage.clear();
                  navigate('/login');
                }}
              >
                LogOut
              </Button>
      </>
    )
  }

  return (
    <Stack sx={{ display: 'flex' }}>
      <MuiAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor: 'darkblue'}}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Avatar src="../../public/hImg.png"></Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hecathon App
          </Typography>
          {!isMobile && (
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', paddingLeft: 5 }}>
              {appBar()}
            </Stack>
          )}
        </Toolbar>
      </MuiAppBar>
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {/* Drawer content here */}
          <Stack direction="column" spacing={2} sx={{ m: 10 }}>
            {appBar()}
          </Stack>
        </Drawer>
      )}
    </Stack>
  );
};

export default Navbar;

