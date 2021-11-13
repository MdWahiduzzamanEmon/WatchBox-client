import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import useAuth from "../../Hooks/useAuth";

import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import MyOrder from "./Users/MyOrder/MyOrder";
import Pay from "./Users/Pay/Pay";
import Review from "./Users/Review/Review";
import ManageAll from "./Admin/ManageAll/ManageAll";
import ManageAllProduct from "./Admin/ManageAllProduct/ManageAllProduct";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import AddProduct from "./Admin/AddProduct/AddProduct";
import PrivateAdminRoute from "../../Private/PrivateAdminRoute";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const { user, isAdmin, signout } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Box sx={{ flexGrow: 1, minHeight: "800px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold", textAlign: "left" }}
              >
                Dashboard
                <Typography variant="caption" display="block" gutterBottom>
                  Welcome Back, {user?.displayName}
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                sx={{ backgroundColor: "#21a06a", color: "#000", m: 1 }}
                onClick={signout}
              >
                <i className="fas fa-sign-out-alt"></i>
              </Button>
            </Box>
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
                    <i
                      className="fas fa-house-user"
                      style={{ margin: "0 5px", color: "#21a06a" }}
                    ></i>
                    Home
                  </NavLink>
                </li>
                <Divider />
                <Divider />
                {!isAdmin && (
                  <>
                    {" "}
                    <li style={{ margin: "10px 0px" }}>
                      <NavLink
                        to={`${url}`}
                        style={(isActive) => ({
                          color: isActive ? "#21a06a" : "#000",
                          textDecoration: "none",
                          fontWeight: "bold",
                        })}
                      >
                        <i
                          className="far fa-folder"
                          style={{ margin: "0 5px", color: "#21a06a" }}
                        ></i>
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
                        <i
                          className="fab fa-cc-mastercard"
                          style={{ margin: "0 5px", color: "#21a06a" }}
                        ></i>
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
                        <i
                          className="fas fa-comment-medical"
                          style={{ margin: "0 5px", color: "#21a06a" }}
                        ></i>
                        Review
                      </NavLink>
                    </li>
                    <Divider />{" "}
                  </>
                )}
                <Divider />
                {isAdmin && (
                  <>
                    {" "}
                    <li style={{ margin: "10px 0px" }}>
                      <NavLink
                        to={`${url}/manageOrder`}
                        style={(isActive) => ({
                          color: isActive ? "#21a06a" : "#000",
                          textDecoration: "none",
                          fontWeight: "bold",
                        })}
                      >
                        <i
                          className="fas fa-tasks"
                          style={{ margin: "0 5px", color: "#21a06a" }}
                        ></i>
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
                        <i
                          className="fab fa-product-hunt"
                          style={{ margin: "0 5px", color: "#21a06a" }}
                        ></i>
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
                        <i
                          className="fas fa-users-cog"
                          style={{ margin: "0 5px", color: "#21a06a" }}
                        ></i>
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
                        <i
                          className="fas fa-plus-circle"
                          style={{ margin: "0 5px", color: "#21a06a" }}
                        ></i>
                        Add Product
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <div>
              <Switch>
                <Route exact path={path}>
                  {!isAdmin ? <MyOrder /> : <ManageAll />}
                </Route>
                <Route path={`${path}/payment`}>
                  <Pay />
                </Route>

                <Route path={`${path}/review`}>
                  <Review />
                </Route>
                <PrivateAdminRoute path={`${path}/manageOrder`}>
                  <ManageAll />
                </PrivateAdminRoute>
                <PrivateAdminRoute path={`${path}/manageAllProduct`}>
                  <ManageAllProduct />
                </PrivateAdminRoute>
                <PrivateAdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin />
                </PrivateAdminRoute>
                <PrivateAdminRoute path={`${path}/addProduct`}>
                  <AddProduct />
                </PrivateAdminRoute>
              </Switch>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Dashboard;
