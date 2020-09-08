import React from "react";
import Home from "./pages/Home";
//import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
