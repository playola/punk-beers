import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page routes
import {
  BeersList,
  BeerDetails,
} from './index';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <BeersList />} />
      <Route path="/beer-detail/:index" render={() => <BeerDetails />} />
    </Switch>
  </Router>
);

export default Routes;
