import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { theme } from './style/theme';
import { GlobalStyle } from './style/global';
import Routes from './pages/routes';
import * as serviceWorker from './serviceWorker';

const AppProvider = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
