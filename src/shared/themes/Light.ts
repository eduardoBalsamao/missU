import {createTheme, responsiveFontSizes} from '@mui/material/styles';


export const LightTheme = responsiveFontSizes(createTheme({


  typography: {
    h1: {
      fontFamily: 'M PLUS Rounded 1c',
    },
    h2: {
      fontFamily: 'Baloo 2',
      fontWeight: '600',
    },
    h3: {
      fontFamily: 'Baloo 2',
      fontWeight: '500',
    },
    h4: {
      fontFamily: 'M PLUS Rounded 1c',
      fontWeight: '500',
    },
    h5: {
      fontFamily: 'M PLUS Rounded 1c',
      fontWeight: '500',
    },
    h6: {
      fontFamily: 'M PLUS Rounded 1c',
    },
    subtitle1: {
      fontFamily: 'Baloo 2',
      fontWeight: '700',
    },
    subtitle2: {
      fontFamily: 'M PLUS Rounded 1c',
      fontWeight: '400',
    },
    body1: {
      fontFamily: 'M PLUS Rounded 1c',
      fontWeight: '600',
    },
    body2: {
      fontFamily: 'M PLUS Rounded 1c',
    },
    button: {
      fontFamily: 'M PLUS Rounded 1c',
    },

    fontFamily: [
      'M PLUS Rounded 1c',
      'Baloo 2'
    ].join(','),
  },

}));


