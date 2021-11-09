import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bannerBg from '../../../images/Greubel_PLP_Header_990x618.jpg'
const Banner = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "70vh",
          backgroundBlendMode: "overlay",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Find Your Watch
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{
              color: "white",
              //   fontWeight: "bold",
              width: "60%",
              margin: "0 auto",
            }}
          >
            Level up your collection from an always-evolving assortment of the
            world’s finest timepieces. Featuring classics and independent brands
            like Rolex, Audemars Piguet, Patek Phillipe, Greubel Forsey, H.
            Moser & Cie, and more. Our collection is always growing. Yours
            should, too.
          </Typography>
          <Button variant="outlined" sx={{ m: 5, backgroundColor: "#21a06a",color:"#fff" }}>
            Explore Watches
          </Button>
        </Box>
      </div>
    );
};

export default Banner;