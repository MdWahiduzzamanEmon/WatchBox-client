import { Container, Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import payment from '../../images/paymernt.png'
import playstore from '../../images/playstore.png'
const Footer = () => {
  const history = useHistory();
  return (
    <div style={{ backgroundColor: "#34495E", color: "#fff", mt: 3 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            py: 3,
            borderBottom: "2px solid #fff",
          }}
        >
          <Box sx={{ borderRight: "2px solid #fff", px: 2 }}>
            {" "}
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="body2"
              gutterBottom
            >
              4043 N RAVENSWOOD AVE, SUITE 316,CHICAGO, IL 60613
            </Typography>
          </Box>
          <Box sx={{ borderRight: "2px solid #fff", px: 2 }}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="body2"
              gutterBottom
            >
              334.553.2234
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", mx: 1 }}
              variant="body2"
              gutterBottom
            >
              CONTACT
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ borderBottom: "2px solid #fff" }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Button
              variant="outlined"
              sx={{ my: 5, backgroundColor: "#21a06a", color: "#fff" }}
              onClick={() => {
                history.push("/allProducts");
              }}
            >
              Explore Watches
            </Button>
            <img src={playstore} alt="" style={{ width: "40%" }} />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              mt: 2,
            }}
          >
            <NavLink
              to="/home"
              style={(isActive) => ({
                color: isActive ? "#21a06a" : "#000",
                textDecoration: "none",
                fontWeight: "bold",
                margin: "10px 10px",
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
                margin: "10px 10px",
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
                margin: "10px 10px",
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
                margin: "10px 10px",
              })}
            >
              FAQ
            </NavLink>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={payment}
              alt=""
              style={{ marginTop: "10px", width: "100%" }}
            />
            <div>
              <span>
                <a
                  href="https://www.facebook.com/"
                  style={{ color: "#fff", fontSize: 30, padding: "5px 10px" }}
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.youtube.com/"
                  style={{ color: "#fff", fontSize: 30, padding: "5px 10px" }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/"
                  style={{ color: "#fff", fontSize: 30, padding: "5px 10px" }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/"
                  style={{ color: "#fff", fontSize: 30, padding: "5px 10px" }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </span>
            </div>
          </Grid>
        </Grid>
        <Box>
          <Typography variant="subtitle2" gutterBottom sx={{ py: 3, mb: 0 }}>
            All reserved by MD WAHIDUZZAMAN EMON || 2021 ||
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
