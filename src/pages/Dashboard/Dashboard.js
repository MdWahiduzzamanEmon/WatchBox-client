import { Grid, Box, Typography } from "@mui/material";
import React from 'react';
import Divider from "@mui/material/Divider";
import useAuth from "../../Hooks/useAuth";
import {
 
  Switch,
  Route,

  NavLink,

  useRouteMatch,
} from "react-router-dom";
import MyOrder from "./Users/MyOrder/MyOrder";
import Pay from "./Users/Pay/Pay";
import Review from "./Users/Review/Review";
import ManageAll from "./Admin/ManageAll/ManageAll";
import ManageAllProduct from "./Admin/ManageAllProduct/ManageAllProduct";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import AddProduct from "./Admin/AddProduct/AddProduct";
const Dashboard = () => {
    const { user } = useAuth();
     let { path, url } = useRouteMatch();
    return (
      <div>
        <Box sx={{ flexGrow: 1, height: "800px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} sx={{ border: "1px solid gray" }}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold", textAlign: "left", p: 2 }}
              >
                Dashboard
                <Typography variant="caption" display="block" gutterBottom>
                  Welcome Back, {user?.displayName}
                </Typography>
              </Typography>
              <Divider />
              <Box>
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to="/home"
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      Home
                    </NavLink>
                  </li>
                  <Divider />
                  <Divider />
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to={`${url}`}
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      My Order
                    </NavLink>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to={`${url}/payment`}
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      Payment
                    </NavLink>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to={`${url}/review`}
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      Review
                    </NavLink>
                  </li>
                  <Divider />
                  <Divider />
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to={`${url}/manageOrder`}
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      Manage All Order
                    </NavLink>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to={`${url}/manageAllProduct`}
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      Manage All Product
                    </NavLink>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to={`${url}/makeAdmin`}
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      Make Admin
                    </NavLink>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <NavLink
                      to={`${url}/addProduct`}
                      style={(isActive) => ({
                        color: isActive ? "#21a06a" : "#000",
                        textDecoration: "none",
                        fontWeight: "bold",
                      })}
                    >
                      Add Product
                    </NavLink>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={10} >
            <Switch>
              <Route exact path={path}>
                <MyOrder />
              </Route>
              <Route path={`${path}/payment`}>
                <Pay />
              </Route>

              <Route path={`${path}/review`}>
                <Review />
              </Route>
              <Route path={`${path}/manageOrder`}>
                <ManageAll />
              </Route>
              <Route path={`${path}/manageAllProduct`}>
                <ManageAllProduct />
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
              <Route path={`${path}/addProduct`}>
                <AddProduct />
              </Route>
            </Switch>
          </Grid>
          </Grid>
        </Box>
      </div>
    );
};

export default Dashboard;