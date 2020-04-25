import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import DetailOrder from "./pages/DetailOrder";
import SelectProduct from "./pages/SelectProduct";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/detail-order" exact component={DetailOrder} />
        <Route path="/select-product" exact component={SelectProduct} />
      </Switch>
    </BrowserRouter>
  );
}
