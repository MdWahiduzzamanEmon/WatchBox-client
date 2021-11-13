import React, { useState } from "react";
import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function DrawerComponent() {
  const history = useHistory();
  const { user, signout } = useAuth();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink
                to="/faq"
                style={(isActive) => ({
                  color: isActive ? "#21a06a" : "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  margin: "0 10px",
                })}
              >
                Faq
              </NavLink>
            </ListItemText>
          </ListItem>

            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
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
              </ListItemText>
            </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
              {!user.uid ? (
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
                  sx={{ backgroundColor: "#21a06a", color: "#000", mx: 1 }}
                  onClick={signout}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </Button>
              )}
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{ color: "#21a06a" }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
