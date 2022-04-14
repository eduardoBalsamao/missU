import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Container, IconButton, Toolbar, Menu, MenuItem, Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { auth } from '../../firebase'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




export const HeaderConfig: React.FC = () => {
    const navigate = useNavigate();

  return (
    <AppBar sx={{
        height: '8vh',
        boxShadow: '0px 7px 10px -7px #fe93bb',
        backgroundColor: '#faf2f9'
      }} color='transparent'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}}}>
              <IconButton color="primary" component="span">
                <img style={{height: '40px'}} src={process.env.PUBLIC_URL + '/icon.png'} />
              </IconButton>
            </Box>
  
            <Box sx={{flexGrow: 0}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>{navigate('/')}}
                color="inherit"
              >
                <ArrowBackIcon sx={{color: '#fe77a9'}} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
