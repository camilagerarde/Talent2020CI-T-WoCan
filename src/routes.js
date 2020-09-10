import React from 'react';
import Home from './pages/Home';
import Start from './pages/Start';
import FrontEnd from './pages/FrontEnd';
import BackEnd from './pages/Back';
import DevOps from './pages/DevOps';
import Initiatives from './pages/Initiatives';
import NotFound from './pages/NotFound';
import Guide from './pages/Guide';
import Initiative from './pages/Initiative';
import Monitoring from './pages/Monitoring';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/start' component={Start} exact />
      <Route path='/frontend' component={FrontEnd} exact />
      <Route path='/backend' component={BackEnd} exact />
      <Route path='/devops' component={DevOps} exact />
      <Route path='/initiatives' component={Initiatives} exact />
      <Route path='*' component={NotFound} />
      <Route path='/guide' component={Guide} exact />
      <Route path='/initiative' component={Initiative} exact />
      <Route path='/monitoring' component={Monitoring} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
