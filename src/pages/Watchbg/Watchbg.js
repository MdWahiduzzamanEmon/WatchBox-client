import React from 'react';
import { Box } from "@mui/system";
import wtachBg from "../../images/watch.png";
import { Typography } from '@mui/material';
const Watchbg = () => {
    return (
      <div>
        <Box>
          <img src={wtachBg} alt="" className="WatchBgImage" />
        </Box>
        <Typography variant="h4" sx={{my:4}}>
          -Featured <span style={{ color: "#21a06a" }}>Products-</span>
        </Typography>
      </div>
    );
};

export default Watchbg;