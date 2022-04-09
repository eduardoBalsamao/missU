import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface IArtigoLayoutProps {
    text: string | undefined;
    onClick: () => void;
}

const BootstrapButton = styled(Button)({
    width: '100%',
    boxShadow: "inset 0px 1px 0px 0px #fbafe3",
    backgroundColor: "transparent",
    borderRadius: "6px",
    border: "3px solid #fe93ba",
    display: "inline-block",
    cursor: "pointer",
    color: "#fe93ba",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "6px 24px",
    textDecoration: "none",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: "transparent"
    },
    '&:active': {
      position: "relative",
      top: '1px',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem "#fe76a8"',
    },
  });

export const CustomButton2: React.FC<IArtigoLayoutProps> = ({text, onClick}) => {
  return (
    <Box>
        <BootstrapButton onClick={onClick} variant="contained" disableRipple>
            {text}
        </BootstrapButton>
    </Box>
  );
};
