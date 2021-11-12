import React from "react";
import { Box } from "@mui/system";
import wtachBg from "../../images/watch.png";
import shapeBg from "../../images/AOL-BG.png";
import { Typography } from "@mui/material";
const Watchbg = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${shapeBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box>
        <img src={wtachBg} alt="" className="WatchBgImage bounce-1" />
      </Box>
      <Typography variant="h4" sx={{ my: 4, fontWeight: "bold" }}>
        -Featured <span style={{ color: "#21a06a" }}>Products-</span>
      </Typography>
    </div>
  );
};

export default Watchbg;
