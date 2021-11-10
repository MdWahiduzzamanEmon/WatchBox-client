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
        <Typography>
          <h3 >
            -Featured <span style={{ color: "#21a06a" }}>Products-</span>
          </h3>
        </Typography>
      </div>
    );
};

export default Watchbg;