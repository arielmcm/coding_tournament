import { createMuiTheme } from '@material-ui/core/styles/index';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#6ec6ff',
      main: '#2196f3',
      dark: '#0069c0',
      contrastText: '#fff',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontFamily: [
      'Nunito',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
