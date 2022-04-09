import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate} from 'react-router-dom';
import { auth } from '../../firebase'



export const Header: React.FC = () => {
    const navigate = useNavigate();

    const signOut = async () => {
      await auth.signOut();
      navigate('/')
    };

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
                color="inherit"
                onClick={()=>{signOut()}}
              >
                <SettingsIcon sx={{color: '#fe77a9'}} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
