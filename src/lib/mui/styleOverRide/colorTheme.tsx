import NotoSansBlack from '../../../assets/fonts/NotoSans/NotoSans-Black.ttf';
import { createTheme } from '@mui/material/styles';
import { dark, PaletteColorOptions } from '@mui/material/styles/createPalette';

export const colorTheme = createTheme({
  typography: {
    fontFamily: 'NotoSans, Arial',
    fontWeightRegular:'700',
    fontWeightBold:'900',
    fontWeightMedium:'600',
    button:{
      textTransform: 'none',
    },
  
  },

  palette: {
    action: {
      disabledBackground: '#BDBDBD',
      disabled: '#FFFFFF'
    },

    primary: {
      main: "#FFFFF"
    },
    secondary: {
      main: "rgba(202, 231, 250, 0.4);",
      dark: "rgba(241, 250, 255, 0,8)",
      contrastText: '#1586BB',
    },
    error: {
      main: "#C72020",
      contrastText: '#FFFFFF',
    },
    success: {
      main: "#27AE60",
      contrastText: '#FFFFFF',
    },
    warningCritic: {
      main: "rgba(198, 0, 0, 0.65)",
      contrastText: '#FFFFFF'
    },
    warningHigh: {
      main: "rgba(255, 193, 136, 0.65)",
      contrastText: '#D26300'
    },
    warningMedium: {
      main: "rgba(255, 251, 231, 0.65)",
      contrastText: '#F2C94C'
    },
    warningLow: {
      main: "rgba(252, 252, 252, 0.65)",
      contrastText: '#95CCEE'
    },
    darkBlueText: {
      main: '#072E4C',
      contrastText: '#FFFFFF'
    },
    blueText: {
      main: '#1586BB',
      contrastText: '#FFFFFF'
    },
    darkestBlue: {
      main: '#235885',
      contrastText: '#FFFFFF'
    },
    darkerBlue: {
      main: '#1586BB'
    },
    normalBlue: {
      main: '#95CCEE'
    },
    lightBlue: {
      main: '#A9E4FF73'
    },
    lighterBlue: {
      main: '#CAE7FA'
    },
    lightestBlue: {
      main: '#F6F9FA'
    },
    lightBlueWithAlfa: {
      main: 'rgba(169,228,255,0.45)'
    },
    lighterBlueWithAlfa: {
      main: 'rgba(202,231,250,0.24);'
    },
    lightestBlueWithAlfa: {
      main: 'rgba(246, 249, 250, 0.8)'
    },
    ultraWhite: {
      main: '#FFFFFF'
    },



  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'NotoSansBlack';
          src:   local('NotoSans'),
          local('NotoSans-Black'),
          url(${NotoSansBlack}) format('ttf')
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default colorTheme;