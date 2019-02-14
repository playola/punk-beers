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
      <Route path="/beer-detail/:id" render={({ match }) => <BeerDetails id={match.params.id} />} />
    </Switch>
  </Router>
);

export default Routes;
