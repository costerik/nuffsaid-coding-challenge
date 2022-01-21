/* eslint-disable @typescript-eslint/no-unused-vars */
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: {
      error: string;
      warning: string;
      info: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    colors?: {
      error?: string;
      warning?: string;
      info?: string;
    };
  }
}
