import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.2";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Components} />
    </Switch>
  </Router>
);
