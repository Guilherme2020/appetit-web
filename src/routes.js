import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DetailOrder from "./pages/DetailOrder";
import SelectProduct from "./pages/SelectProduct";
import SelectClients from "./pages/SelectClients";
import StatusPayment from "./pages/StatusPayment";
import FeedbackOrder from "./pages/FeedbackOrder";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/detail-order/:order" exact component={DetailOrder} />
        <Route path="/select-product" exact component={SelectProduct} />
        <Route path="/select-clients" exact component={SelectClients} />
        <Route path="/status" exact component={StatusPayment} />
        <Route path="/feedback" exact component={FeedbackOrder} />
      </Switch>
    </BrowserRouter>
  );
}
