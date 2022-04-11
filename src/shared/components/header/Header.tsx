import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Container, IconButton, Toolbar, Menu, MenuItem, Typography, Button} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate} from 'react-router-dom';
import { auth } from '../../firebase'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




export const Header: React.FC = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React
      .useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setAnchorElNav(null);
      setOpen(false);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

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
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <SettingsIcon sx={{color: '#fe77a9'}} />
              </IconButton>
              <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'block'},
              }}
            >
              <MenuItem onClick={()=> {
                handleClickOpen()
              }}>
                <Typography textAlign="center">Desconectar</Typography>
              </MenuItem>

            </Menu>
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
          </Toolbar>
        </Container>
      </AppBar>
  );
};
