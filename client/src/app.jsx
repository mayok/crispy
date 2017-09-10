import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Base from './components/Base';
import Home from './components/Home';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
      <div>
        <Base />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>), document.getElementById('react-app'),
);
