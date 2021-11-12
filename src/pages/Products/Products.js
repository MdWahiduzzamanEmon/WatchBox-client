import { Container, Box, Grid, CircularProgress } from "@mui/material";
import axios from "axios";
import bgShape2 from "../../images/AOL-BG.png";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(true);
      axios
        .get("https://polar-journey-34409.herokuapp.com/products")
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <Box
      style={{
        backgroundImage: `url(${bgShape2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <Container>
        {isLoading ? (
          <CircularProgress color="success" sx={{ my: 5 }} />
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Products;
