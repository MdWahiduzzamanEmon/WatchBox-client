 import React from "react";
 import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../Private/PrivateRoute";
import ExploreAllWatches from "../ExploreAllWatches/ExploreAllWatches";
import Signin from "../Form/ProductAddForm/SignIn/Signin";
import Register from "../Form/Register/Register";
 import Home from "../Home/Home/Home";
import SingleProductDetails from "../SingleProductDetails/SingleProductDetails";

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
           <PrivateRoute path="/SingleProductDetails/:id">
             <SingleProductDetails />
           </PrivateRoute>
           <Route path="/register">
             <Register />
           </Route>
           <Route path="/signin">
             <Signin />
           </Route>
         </Switch>
       </BrowserRouter>
     </div>
   );
 };

 export default Routing;