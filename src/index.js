import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Welcome from './Appfunc';
import NewApp from './newApp';
import reportWebVitals from './reportWebVitals';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import "moment/locale/ko";

ReactDOM.render(
  <MuiPickersUtilsProvider locale="ko" utils={MomentUtils}>
  <React.StrictMode>
    <NewApp />
  </React.StrictMode>,
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
