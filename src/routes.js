import React from "react";
import Home from "./pages/Home";
import Start from "./pages/Start";
import FrontEnd from "./pages/FrontEnd";
import Back from "./pages/Back";
import Datasc from "./pages/Datasc";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/start" component={Start} exact />
      <Route path="/frontend" component={FrontEnd} exact />
      <Route path="/back" component={Back} exact />
      <Route path="/datasc" component={Datasc} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
