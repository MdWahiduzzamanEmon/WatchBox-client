import { Grid, Paper, Box, Typography, Rating, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, image, rating, price, short_description, _id } = product;
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Box
        sx={{
          // display: "flex",
          mx: "auto",
          width: 300,
          height: 450,
          borderBottom: "3px solid #21a06a",
        }}
      >
        <Paper elevation={0} sx={{ p: 2 }}>
          <Box>
            <img
              src={image}
              alt=""
              style={{ width: "180px", height: "200px", objectFit: "cover" }}
            />
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#21a06a" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            {short_description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Rating
              name="text-feedback"
              value={parseFloat(rating)}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Typography
              variant="button"
              display="block"
              gutterBottom
              sx={{
                fontWeight: "bold",
                backgroundColor: "#21a06a",
                padding: "0 15px",
                borderRadius: "20px",
              }}
            >
              ${parseFloat(price)}
            </Typography>
          </Box>
          <Box>
            <Link
              to={`/SingleProductDetails/${_id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                sx={{ m: 3, backgroundColor: "#21a06a", color: "#000" }}
              >
                Buy Now
              </Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Product;
