import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import logo from '../../images/WatchBox_Wordmark_RGB_Black.svg'
import { Box } from "@mui/system";


function Navbar() {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", borderBottom: "3px solid #21a06a" }}
    >
      {/* <CssBaseline /> */}
      <Toolbar style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
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
                to="/"
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
                to="/about"
                style={(isActive) => ({
                  color: isActive ? "#21a06a" : "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  margin: "0 10px",
                })}
              >
                About
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
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
