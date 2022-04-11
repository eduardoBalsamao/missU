import React, {useContext} from 'react';
import {Box, Typography, Stack, Skeleton } from '@mui/material';
import {CustomButton, CustomButton2} from '../../shared/components'
import {useNavigate} from 'react-router-dom';
import { HuePicker } from 'react-color'
import { AuthContext } from '../../shared/context/AuthContext';
import {getDatabase, ref, onValue, update} from 'firebase/database';
import app from '../../shared/firebase'

const commonStyles = {
    borderColor: 'text.primary',
    m: 1,
    width: '10rem',
    height: '10rem',
  };

export const Home: React.FC = () => {
    const user = useContext(AuthContext);
    const [r, setR] = React.useState<number | HTMLElement>(12);
    const [g, setG] = React.useState<number | HTMLElement>(3);
    const [b, setB] = React.useState<number | HTMLElement>(233);
    const [color, setColor] = React.useState();
    const [status, setStatus] = React.useState();
    const [email, setEmail] = React.useState(user?.email);
    const database = getDatabase(app);

    const handleChange = (color: any) => {
        setColor(color.hex)
        setR(color.rgb.r)
        setG(color.rgb.g)
        setB(color.rgb.b)
    }

    const ligar = async () => {
        await onValue(ref(database, `/users/${email?.substring(0, email?.length - 10)}/status`), (snapshot) =>{
            const sts = snapshot.val()
            setStatus(sts)
          });
        if(status == '0'){
            update(ref(database, `/users/${email?.substring(0, email?.length - 10)}`),{
                status: '1',
            })
        }
        if(status == '1'){
            update(ref(database, `/users/${email?.substring(0, email?.length - 10)}`),{
                status: '0',
            })
        }
    }

    const handleChangeComplete = () => {
        console.log(color)
        update(ref(database, `/users/${email?.substring(0, email?.length - 10)}`),{
            hex: color,
            r: r,
            g: g,
            b: b,
        })
    }

    function ChangeButton(): JSX.Element {
        if(status == '0'){
            return <Box marginTop="8vh" width="75%"><CustomButton onClick={()=>{ligar()}} text="Ligar"></CustomButton></Box>
        }
        if(status == '1'){
            return <Box marginTop="8vh" width="75%"><CustomButton2 onClick={()=>{ligar()}} text="Desligar"></CustomButton2></Box>
        }
        return <Box />
    }


      React.useEffect(() => {
        const getColor = async () =>{
          await onValue(ref(database, `/users/${email?.substring(0, email?.length - 10)}/hex`), (snapshot) =>{
            const cor = snapshot.val()
            setColor(cor)
          });
        };
        const getStatus = async () =>{
            await onValue(ref(database, `/users/${email?.substring(0, email?.length - 10)}/status`), (snapshot) =>{
                const sts = snapshot.val()
                setStatus(sts)
            });
        };
        getStatus();
        getColor();
      }, []);
    

  return (
    <Box height="100vh" sx={{backgroundColor: '#F2F4FA'}}>
        <Box sx={{paddingTop: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                <Typography sx={{marginY: '2vh', color: '#4a2963', fontFamily: 'Baloo 2'}} variant="h2">
                    Bem vindo {email?.substring(0, email?.length - 10)}
                </Typography>
                {
                    color ? (
                        <Box sx={{ ...commonStyles, borderRadius: '50%', bgcolor: `${color}` }} />
                    ) : (
                        <Skeleton animation="wave" variant="circular" sx={{ ...commonStyles}} />
                    )
                }
                <Typography sx={{color: '#4a2963'}}>
                    Cor atual
                </Typography>
                <HuePicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
            </Stack>
        </Box>
        <Box>
            <Stack direction="column" justifyContent="center" alignItems="center">
                { 
                    status ? (
                        <ChangeButton />
                    ) : (
                        <Skeleton sx={{marginTop: '8vh'}} />
                    )
                }
            </Stack>
        </Box>
      
    </Box>
  );
};

