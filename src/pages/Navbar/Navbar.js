import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Avatar,
} from "@mui/material";
import { Link, NavLink, useHistory } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { Box } from "@mui/system";
import useAuth from "../../Hooks/useAuth";

function Navbar() {
  const { user, signout } = useAuth();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", borderBottom: "3px solid #21a06a" }}
    >
      {/* <CssBaseline /> */}
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link to="/" className="Link">
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Watch Box
            </Typography>
          </Link>
        </Box>
        <Box>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div>
              <NavLink
                to="/home"
                style={(isActive) => ({
                  color: isActive ? "#21a06a" : "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  margin: "0 10px",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/allProducts"
                style={(isActive) => ({
                  color: isActive ? "#21a06a" : "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  margin: "0 10px",
                })}
              >
                All Products
              </NavLink>
              <NavLink
                to="/contact"
                style={(isActive) => ({
                  color: isActive ? "#21a06a" : "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  margin: "0 10px",
                })}
              >
                Contact
              </NavLink>
              <NavLink
                to="/faq"
                style={(isActive) => ({
                  color: isActive ? "#21a06a" : "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  margin: "0 10px",
                })}
              >
                FAQ
              </NavLink>

                <NavLink
                  to="/dashboard"
                  style={(isActive) => ({
                    color: isActive ? "#21a06a" : "#000",
                    textDecoration: "none",
                    fontWeight: "bold",
                    margin: "0 10px",
                  })}
                >
                  Dashboard
                </NavLink>
 
              {user?.uid && (
                <h2
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    display: "inline-flex",
                    margin: "0 10px",
                  }}
                >
                  {user.displayName}
                </h2>
              )}
              {user.photoURL && (
                <Avatar
                  alt="Travis Howard"
                  src={user.photoURL}
                  sx={{ display: "inline-flex" }}
                />
              )}
              {!user?.uid ? (
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: "#21a06a", color: "#000", mx: 5 }}
                  onClick={() => {
                    history.push("/signin");
                  }}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#21a06a",
                    color: "#000",
                    
                    mx: 1,
                    py: 1.5,
                  }}
                  onClick={signout}
                >
                  <i className="fas fa-sign-out-alt" style={{fontSize:"18px"}}></i>
                </Button>
              )}
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
