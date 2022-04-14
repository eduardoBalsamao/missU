import React, {useEffect} from 'react';
import {Grid, Box, TextField, CircularProgress, Modal} from '@mui/material';
import {CustomButton, CustomButton2} from '../../shared/components'
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {auth} from '../../shared/firebase'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1vh',
  backgroundColor: 'transparent',
  p: 4,
};

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(true);

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

    const signIn = async () => {
      handleOpen()
      if(checked == true){
        localStorage.setItem('lsCode', email)
        localStorage.setItem('lsPass', password)
      }
      const code = email + '@missu.com'
      try {
        await auth.signInWithEmailAndPassword(code, password);
        handleClose()
        navigate('/')
      } catch (error) {
        console.log(error);
        handleClose()
      }
    }; 

    React.useEffect(() => {
      const lsCode = localStorage.getItem('lsCode');
      const lsPass = localStorage.getItem('lsPass');
      if(lsCode && lsPass != null){
        setEmail(lsCode);
        setPassword(lsPass)
      }
    }, []);

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
        <Box sx={{marginY: '4vh', display: {xs: 'flex', md: 'none'}}}>
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
                value={email}
            />
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{marginTop: '3vh', width: {xs: '85vw', md: '40vw'}, borderRadius: '25%'}}>
            <CssTextField
                label="Senha"
                id="outlined-size-pass"
                size="small"
                sx={{width: '100%'}}
                onChange={handleChangePassword}
                value={password}
            />
        </Box>
      </Grid>

      <Grid item> 
        <Box sx={{marginY:'2vh'}}>
          <FormControlLabel sx={{color: '#4b2f68'}} control = {
            <Checkbox
              sx={{
                color: '#CB7594',
                '&.Mui-checked': {
                  color: '#CB7594',
                },
              }}
              checked={checked}
              onChange={handleCheckChange}
              inputProps={{ 'aria-label': 'controlled' }} />
        
            } label="Lembrar código e senha" />
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
    <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
          <CircularProgress sx={{color: '#fe93ba'}} />
        </Box>
      </Modal>
    </Box>
  );
};

