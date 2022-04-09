import React, {useContext} from 'react';
import {Grid, Box, TextField} from '@mui/material';
import {CustomButton, CustomButton2} from '../../shared/components'
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {auth} from '../../shared/firebase'
import { AuthContext } from '../../shared/context/AuthContext';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#CB7594',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#CB7594',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fe93ba',
      },
      '&:hover fieldset': {
        borderColor: '#fbafe3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#CB7594',
      },
    },
  });

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const user = useContext(AuthContext)

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

    const signIn = async () => {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        alert("Bem vindo ao Connect");
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    }; 

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
        <Box sx={{marginY: '6vh', display: {xs: 'flex', md: 'none'}}}>
          <img style={{height: '20vh'}} src='https://i.imgur.com/zf8Aadc.png' />
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{marginTop: '3vh', width: {xs: '85vw', md: '40vw'}, borderRadius: '25%'}}>
            <CssTextField
                label="Código"
                id="outlined-size-small"
                size="small"
                sx={{width: '100%'}}
                onChange={handleChangeEmail}
            />
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{marginTop: '3vh', width: {xs: '85vw', md: '40vw'}, borderRadius: '25%'}}>
            <CssTextField
                label="Senha"
                id="outlined-size-small"
                size="small"
                sx={{width: '100%'}}
                onChange={handleChangePassword}
            />
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{marginTop: '3vh', width: {xs: '85vw', md: '50vw'}, borderRadius: '25%'}}>
          <CustomButton onClick={()=>{signIn()}} text="Entrar" ></CustomButton>
        </Box>
      </Grid>

      
      <Grid item>
        <Box sx={{marginY: '2vh', width: {xs: '85vw', md: '50vw'}, borderRadius: '25%'}}>
          <CustomButton2 onClick={()=>{navigate('/')}} text="Voltar" ></CustomButton2>
        </Box>
      </Grid>

      

    </Grid>
    </Box>
  );
};

