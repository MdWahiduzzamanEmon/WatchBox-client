import { Container, Box, Typography, Grid, TextField } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import bgShape from "../../images/AOL-BG.png";
import Advertise from "../shared/Advertise/Advertise";
import Products from "../Products/Products";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${bgShape})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Get In <span style={{ color: "#21a06a" }}>Touch</span>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mb: 4, color: "gray" }}
            >
              All calls made to this number from a T-Mobile handset are free
              from roaming, airtime, or long distance charges. Calls made to
              this number from landlines and non-T-Mobile phones will incur
              international long distance charges as well as any other
              additional charges that may apply.
            </Typography>
          </Box>
          <Box sx={{ mb: 10 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Subject"
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="filled-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Our Top Selling <span style={{ color: "#21a06a" }}>Watch</span>
            </Typography>
            <Box>
              <Products />
            </Box>
          </Box>
        </Container>
      </Box>
      <Advertise />
      <Footer />
    </div>
  );
};

export default Contact;
