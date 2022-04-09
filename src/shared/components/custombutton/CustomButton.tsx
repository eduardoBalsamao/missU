import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';

interface IArtigoLayoutProps {
    text: string | undefined;
    onClick: () => void;
}

const BootstrapButton = styled(Button)({
    width: '100%',
    boxShadow: "inset 0px 1px 0px 0px #fbafe3",
    background: "linear-gradient(to bottom, #fe93ba 5%, #fe76a8 100%)",
    backgroundColor: "#fe93ba",
    borderRadius: "6px",
    border: "1px solid #fe93ba",
    display: "inline-block",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "6px 24px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #fe76a8",
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
        background: "linear-gradient(to bottom, #fe76a8 5%, #fe93ba 100%)",
        backgroundColor: "#fe76a8"
    },
    '&:active': {
        position: "relative", top: "1px"
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem "#fe76a8"',
    },
  });

export const CustomButton: React.FC<IArtigoLayoutProps> = ({text, onClick}) => {
  return (
    <BootstrapButton onClick={onClick} variant="contained" disableRipple>
        {text}
    </BootstrapButton>
  );
};
