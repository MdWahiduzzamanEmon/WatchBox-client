import {
  Container,
  Box,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Products/Product/Product";
import Navbar from "../Navbar/Navbar";
import Divider from "@mui/material/Divider";
import bgShape2 from "../../images/AOL-BG.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Footer from "../Footer/Footer";

const ExploreAllWatches = () => {
  const [products, setProducts] = useState([]);
  const [afterFilterWatch, setAfterFilterWatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //get all products
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(true);
      axios
        .get("https://polar-journey-34409.herokuapp.com/allProducts")
        .then((res) => {
          setProducts(res.data);
          setAfterFilterWatch(res.data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    const filterProduct = products.filter((product) =>
      product?.category.toLowerCase().includes(value.toLowerCase())
    );
    setAfterFilterWatch(filterProduct);
  };

  return (
    <>
      <Navbar />
      <Box
        style={{
          backgroundImage: `url(${bgShape2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container sx={{ my: 5 }}>
          <Divider />
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold", my: 2, display: "inline" }}
            >
              {afterFilterWatch?.length} products found
            </Typography>
            <FormControl variant="standard" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleChange}
                label="casual"
              >
                <MenuItem value={"smart" || ""}>Smart Watch</MenuItem>
                <MenuItem value={"leader" || ""}>Leather</MenuItem>
                <MenuItem value={"casual" || ""}>Casual</MenuItem>
                <MenuItem value={"steel" || ""}>Steel</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider />
          <Divider />
          {isLoading ? (
            <CircularProgress color="success" sx={{ my: 5 }} />
          ) : (
            <Box sx={{ flexGrow: 1, mt: 2 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {afterFilterWatch?.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </Grid>
            </Box>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ExploreAllWatches;
