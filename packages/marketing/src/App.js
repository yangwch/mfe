import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
// import Loadable from 'react-loadable';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// const Loading = () => (
//   <div>Loading</div>
// );

// const Landing = Loadable({
//   loader: () => import('./components/Landing'),
//   loading: Loading,
// });

// const Pricing = Loadable({
//   loader: () => import('./components/Pricing'),
//   loading: Loading,
// })

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}