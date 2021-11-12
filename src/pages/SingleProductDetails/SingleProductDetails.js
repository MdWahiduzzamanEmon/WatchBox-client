import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import {
  Container,
  Box,
  Grid,
  Typography,
  Rating,
  Skeleton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ProductAddForm from "../Form/ProductAddForm/ProductAddForm";
const SingleProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(true);
      axios
        .get(`https://polar-journey-34409.herokuapp.com/product/${id}`)
        .then((res) => {
          setSingleProduct(res.data);
          setIsLoading(false);
        });
    }, 1000);
  }, [id]);
  const { name, image, price, description, rating } = singleProduct;
  return (
    <div>
      <Navbar />
      <Container>
        <Box sx={{ flexGrow: 1, my: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <ProductAddForm singleProduct={singleProduct} />
            </Grid>
            {isLoading ? (
              <>
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="rectangular" width={510} height={518} />
              </>
            ) : (
              <Grid item xs={12} md={7}>
                <img
                  src={image}
                  alt=""
                  style={{
                    width: "30%",
                    height: "40%",
                    objectFit: "cover",
                  }}
                />

                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    sx={{ fontWeight: "bold", color: "#21a06a" }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ color: "text.secondary" }}
                  >
                    {description}
                  </Typography>
                  <Rating
                    name="text-feedback"
                    value={parseFloat(rating) || ""}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Typography
                    style={{ textAlign: "right" }}
                    variant="h6"
                    gutterBottom
                    component="div"
                  >
                    Price: ${price}
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SingleProductDetails;
