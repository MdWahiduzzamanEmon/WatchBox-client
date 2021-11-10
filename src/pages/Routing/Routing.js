 import React from "react";
 import { BrowserRouter, Switch, Route } from "react-router-dom";
import ExploreAllWatches from "../ExploreAllWatches/ExploreAllWatches";
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
           <Route path="/home">
             <Home />
           </Route>
           <Route path="/allProducts">
             <ExploreAllWatches />
           </Route>
           <Route path="/SingleProductDetails/:id">
             <SingleProductDetails />
           </Route>
         </Switch>
       </BrowserRouter>
     </div>
   );
 };

 export default Routing;