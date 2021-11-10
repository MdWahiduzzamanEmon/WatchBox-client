import React from "react";
import formBg from "../../../../images/vecteezy_smart-watch-smartphone-low-poly-wireframe-vector-illustration_.jpg"
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from '../../../../Hooks/useAuth'

const Signin = () => {

    const { handleFormFiled, setFormValue } = useAuth();
    const handleSignSubmit = e => {
        e.preventDefault();
        setFormValue({});
        e.target.reset();
    }
    
    return (
      <Box
        style={{
          backgroundImage: `url(${formBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Container>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <form
                onSubmit={handleSignSubmit}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  -Sign In-
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Email"
                  name="email"
                  variant="filled"
                  margin="normal"
                  fullWidth
                  style={{ backgroundColor: "#fff", color: "#000" }}
                  onChange={handleFormFiled}
                />
                <TextField
                  id="filled-basic"
                  label="Password"
                  name="password"
                  variant="filled"
                  margin="normal"
                  fullWidth
                  style={{ backgroundColor: "#fff", color: "#000" }}
                  onChange={handleFormFiled}
                />
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#000", color: "#fff", mt: 2 }}
                  type="submit"
                >
                  SignIn
                </Button>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ my: 2, color: "#fff" }}
                >
                  New User? -
                  <Link to="/register" style={{ color: "#fff" }}>
                    Register
                  </Link>
                </Typography>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
};

export default Signin;
