import React, {useContext} from 'react';
import {Box, Typography, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material';
import {CustomButton, CustomButton2} from '../../shared/components'
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../../shared/context/AuthContext';
import {getDatabase, ref, onValue, update} from 'firebase/database';
import app from '../../shared/firebase'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {auth} from '../../shared/firebase'


const commonStyles = {
    borderColor: 'text.primary',
    m: 1,
    width: '10rem',
    height: '10rem',
  };

  const style = {
    width: '90%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

export const Config: React.FC = () => {
    const user = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }
    const signOut = async () => {
        await auth.signOut();
        navigate('/')
      ;
    }


      React.useEffect(() => {

      }, []);
    

  return (
    <Box height="100vh" sx={{backgroundColor: '#F2F4FA'}}>
        <Box sx={{paddingTop: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem>
                    <ListItemText sx={{textAlign: 'center', color: '#4a2963'}} primary="Configurações" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon sx={{ fontSize: 20 }}>🌙</ListItemIcon>
                    <ListItemText primary="Modo Escuro (Em construção)" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemIcon sx={{ fontSize: 20 }}>🎨</ListItemIcon>
                    <ListItemText primary="Cor Personalizada (Em construção)" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ fontSize: 20 }}>🔑</ListItemIcon>
                    <ListItemText primary="Mudar minha senha (Em construção)" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemIcon sx={{ fontSize: 20 }}>👤</ListItemIcon>
                    <ListItemText primary="Mudar meu nome (Em construção)" />
                </ListItem>
                <ListItem button onClick={handleClickOpen}>
                    <ListItemIcon sx={{ fontSize: 20 }}>❌</ListItemIcon>
                    <ListItemText primary="Fazer Logout" />
                </ListItem>
            </List>
        </Box>
        <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
                >
            <DialogTitle id="alert-dialog-title">
              {"Tem certeza que quer desconectar seu dispositivo??"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Para conectar no futuro você precisará do código e da senha do dispositivo.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button sx={{color: '#fe77a9'}} onClick={handleClose}>Cancelar</Button>
              <Button sx={{color: '#fe77a9'}} onClick={signOut} autoFocus>
                Aceitar
              </Button>
            </DialogActions>
          </Dialog>
      
    </Box>
  );
};

