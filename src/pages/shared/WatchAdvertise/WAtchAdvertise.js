import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import smartWatch from '../../../images/smartWatch.png'

const WAtchAdvertise = () => {
    return (
      <div style={{marginTop:"100px"}}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Get more out of{" "}
                <span style={{ color: "#21a06a" }}>Prolend Watch</span>
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ py: 1, color: "gray" }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ fontSize: 20, color: "#21a06a", marginRight: 10 }}
                ></i>
                Fully layered dolor sit amet, consectetur adipisicing elit.
                Facere, nobis, id expedita dolores officiis laboriosam.
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ py: 1, color: "gray" }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ fontSize: 20, color: "#21a06a", marginRight: 10 }}
                ></i>
                Customizable design dolor sit amet, consectetur adipisicing
                elit. Facere, nobis, id expedita dolores officiis laboriosam.
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ py: 1, color: "gray" }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ fontSize: 20, color: "#21a06a", marginRight: 10 }}
                ></i>{" "}
                Drop ipsum dolor sit amet, consectetur adipisicing elit. Facere,
                nobis, id expedita dolores officiis laboriosam.
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ py: 1, color: "gray" }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ fontSize: 20, color: "#21a06a", marginRight: 10 }}
                ></i>
                Marketing chart dolor sit amet, consectetur adipisicing elit.
                Facere, nobis, id expedita dolores officiis laboriosam.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={smartWatch} alt="" style={{width:"50%"}} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default WAtchAdvertise;