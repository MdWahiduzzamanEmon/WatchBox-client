import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import reviewCard from "../../../images/reviewCard-PNG.png";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Rating,
} from "@mui/material/";
import { Box } from "@mui/system";
const GetReview = () => {
  const [reviews, setReview] = useState([]);
  console.log(reviews);
  useEffect(() => {
    axios
      .get("https://polar-journey-34409.herokuapp.com/review")
      .then((res) => {
        setReview(res.data);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${reviewCard})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container sx={{ mt: 10 }}>
        <Carousel
          Carousel
          style={{
            padding: "35px 0",
          }}
        >
          {reviews?.map((item) => (
            <Card
              sx={{
                minWidth: 275,

                // width: "100%",
                // height: "700px",
              }}
              key={item._id}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.comment}
                </Typography>
                <Typography sx={{ my: 1.5 }} color="text.secondary">
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                </Typography>
                <Typography variant="h6"> {item.userName}</Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default GetReview;