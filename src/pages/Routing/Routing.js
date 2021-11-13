import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../Private/PrivateRoute";
import ExploreAllWatches from "../ExploreAllWatches/ExploreAllWatches";
import Signin from "../Form/ProductAddForm/SignIn/Signin";
import Register from "../Form/Register/Register";
import Home from "../Home/Home/Home";
import SingleProductDetails from "../SingleProductDetails/SingleProductDetails";
import Dashboard from "../Dashboard/Dashboard";
import Error from "../Errror/Error";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/allProducts">
            <ExploreAllWatches />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <PrivateRoute path="/SingleProductDetails/:id">
            <SingleProductDetails />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
