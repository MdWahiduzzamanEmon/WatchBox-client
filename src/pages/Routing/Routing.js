 import React from "react";
 import { BrowserRouter, Switch, Route } from "react-router-dom";
 import Home from "../Home/Home/Home";

 const Routing = () => {
   return (
     <div>
       <BrowserRouter>
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
         </Switch>
       </BrowserRouter>
     </div>
   );
 };

 export default Routing;