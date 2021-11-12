import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from 'react';
import swal from "sweetalert";

const AddProduct = () => {

    const [input, setInput] = useState({});
    const getAddProductValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...input };
        newValue[field] = value;
        setInput(newValue);
    }
    const handlePost = (e) => {
      e.preventDefault();
      if (Object.keys(input).length > 0) {
          axios
            .post("https://polar-journey-34409.herokuapp.com/addProduct", input)
            .then((res) => {
              if (res.data.insertedId) {
                swal({
                  text: "Added successful!",
                  icon: "success",
                });
                setInput({});
              } else {
                swal({
                  text: "Something went wrong!",
                  icon: "error",
                });
              }
            });
      } else {
        swal({
          text: "Please add new product first And try again!",
          icon: "error",
        });
      }
      
    }



    return (
      <div>
        <Container sx={{ mt: 10 }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ textAlign: "left", fontWeight: "bold" }}
          >
            Add Product
          </Typography>
         <form > <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                label="Product Name"
                type="text"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getAddProductValue}
              />
              <TextField
                label="Short Information"
                name="short_description"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getAddProductValue}
              />
              <TextField
                label="Image URL"
                name="image"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getAddProductValue}
              />
              <TextField
                label="Description"
                name="description"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getAddProductValue}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Rating"
                name="rating"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getAddProductValue}
              />
              <TextField
                label="Price"
                variant="outlined"
                name="price"
                fullWidth
                margin="normal"
                onChange={getAddProductValue}
              />
              <TextField
                label="Category"
                name="category"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getAddProductValue}
              />
              <Button
                onClick={handlePost}
                variant="outlined"
                sx={{ backgroundColor: "#21a06a", color: "#000", mb:10}}
              >
                Add Product
              </Button>
            </Grid>
          </Grid></form>
        </Container>
      </div>
    );
};

export default AddProduct;