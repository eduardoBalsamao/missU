import React from 'react';
import {Grid, Box, Stack, IconButton, Avatar, Typography} from '@mui/material';
import {CustomButton, CustomButton2} from '../../shared/components'
import {useNavigate} from 'react-router-dom';

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box height="100vh" display="flex"
    sx={{
      backgroundColor: '#F2F4FA'}}>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
    
      <Grid item>
        <Box sx={{marginY: '3vh', display: {xs: 'none', md: 'flex'}}}>
          <img style={{height: '30vh'}} src='https://i.imgur.com/zf8Aadc.png' />
        </Box>
        <Box sx={{marginY: '10vh', display: {xs: 'flex', md: 'none'}}}>
          <img style={{height: '20vh'}} src='https://i.imgur.com/zf8Aadc.png' />
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{marginTop: '3vh', width: {xs: '85vw', md: '50vw'}, borderRadius: '25%'}}>
          <CustomButton onClick={()=>{navigate('/login')}} text="Já tenho o missU" ></CustomButton>
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{marginY: '5vh', width: {xs: '85vw', md: '50vw'}, borderRadius: '25%'}}>
          <CustomButton2 onClick={()=>{}} text="Quero conhecer o produto" ></CustomButton2>
        </Box>
      </Grid>

      <Grid item>
        <Box>
          <Typography sx={{marginBottom: '2vh'}} variant='body1' color='#4a2963'>
            Conheça nossas redes sociais:
          </Typography>
        </Box>
      </Grid>

      <Grid item>
      <Stack direction="row" spacing={5}>
        <IconButton sx={{borderRadius: '50px'}} color="primary" component="span">
          <Avatar sx={{width: 40, height: 40}} src={process.env.PUBLIC_URL + '/ifacebook.svg'} />
        </IconButton>
        <IconButton color="primary" component="span">
          <Avatar sx={{width: 40, height: 40}} src={process.env.PUBLIC_URL + '/iinstagram.svg'} />
        </IconButton>
      </Stack>
      </Grid>

      

    </Grid>
    </Box>
  );
};

