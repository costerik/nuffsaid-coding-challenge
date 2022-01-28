import React from 'react';
import {render} from 'react-dom';
import {MuiThemeProvider} from '@material-ui/core';

import {theme} from 'styles';
import {Application} from 'components';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Application />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
