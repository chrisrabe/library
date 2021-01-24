import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import colors from 'theme/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      main: colors.bg,
    },
    text: {
      primary: colors.dark,
      secondary: colors.light,
    },
  },
});

export const muiTheme = responsiveFontSizes(theme);
