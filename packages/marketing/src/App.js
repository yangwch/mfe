import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider
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

export default () => {
  return (
  <div>
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
  );
}