import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Playground from "./pages/Playground";
import PlaygroundSlides from "./pages/PlaygroundSlides";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Playground} />
        <Route exact path="/playground" component={Playground} />
        <Route exact path="/playground-slides" component={PlaygroundSlides} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
