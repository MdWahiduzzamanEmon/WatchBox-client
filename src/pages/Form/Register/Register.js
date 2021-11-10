import React from 'react';
import formBg from '../../../images/vecteezy_smart-watch-smartphone-low-poly-wireframe-vector-illustration_.jpg'
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Register = () => {
    const { handleFormFiled,  setFormValue } = useAuth();
    const handleRegisterSubmit = e => {
        e.preventDefault();
        setFormValue({})
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleRegisterSubmit}>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  -Register-
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Name"
                  name="name"
                  variant="filled"
                  margin="normal"
                  fullWidth
                  style={{ backgroundColor: "#fff", color: "#000" }}
                  onChange={handleFormFiled}
                />
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
                <TextField
                  id="filled-basic"
                  label="Retype-Password"
                  name="password2"
                  variant="filled"
                  margin="normal"
                  fullWidth
                  style={{ backgroundColor: "#fff", color: "#000" }}
                  onChange={handleFormFiled}
                />
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#000", color: "#fff", mt: 2 }}
                >
                  Register
                </Button>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ my: 2, color: "#fff" }}
                >
                  Already registered? -
                  <Link to="/signin" style={{ color: "#fff" }}>
                    Sign In
                  </Link>
                </Typography>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
};

export default Register;