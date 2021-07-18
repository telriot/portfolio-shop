
import red from '@material-ui/core/colors/red';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {unstable_createMuiStrictModeTheme} from '@material-ui/core'
const createTheme = process.env.NODE_ENV === 'production' ? createMuiTheme : unstable_createMuiStrictModeTheme;

// A custom theme for this app

let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;