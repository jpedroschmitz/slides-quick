import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Slides from "./pages/Slides";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/slides" component={Slides} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
