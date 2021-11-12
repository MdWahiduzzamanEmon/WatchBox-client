import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import smartWatch2 from "../../../images/smartWatch2.png";

const Series = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="gridDirection"
        >
          <Grid item xs={12} md={6}>
            <img src={smartWatch2} alt="" style={{ width: "50%" }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Get up to
              <span style={{ color: "#21a06a" }}>$100</span>
              for your Prolend Watch Series 2 or Series 3.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ py: 1, color: "gray" }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Series;
