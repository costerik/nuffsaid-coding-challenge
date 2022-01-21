import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';
import {createMuiTheme} from '@material-ui/core/styles';

export const themeBuilder = (options: ThemeOptions): ReturnType<typeof createMuiTheme> =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    ...options,
  });

export default themeBuilder({
  colors: {
    error: '#F56236',
    warning: '#FCE788',
    info: '#88FCA3',
  },
});
