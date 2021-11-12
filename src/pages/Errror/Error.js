import { Button, Box } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import error from "../../images/404.png";

const Error = () => {
  const history = useHistory();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={error} alt="" style={{ width: "60%" }} />
      <Button
        sx={{ backgroundColor: "#21a06a", color: "#000", mb: 10 }}
        variant="outlined"
        onClick={() => {
          history.push("/");
        }}
      >
        Back To Home
      </Button>
    </Box>
  );
};

export default Error;
