import { Container, TextField, Button, Typography, Rating } from "@mui/material";
import axios from "axios";
import React from 'react';
import swal from "sweetalert";
import useAuth from "../../../../Hooks/useAuth";

const Review = () => {
    const { user}= useAuth();
    const [value, setValue] = React.useState(2);
    const [fieldValue,setFieldVAlue]=React.useState("")
    const handleField = (e) => {
        setFieldVAlue(e.target.value);
    }
    const handleReview = (e) => {
        let dataValues = { comment:fieldValue, rating:value,userName:user?.displayName };
        e.preventDefault();
        axios.post("https://polar-journey-34409.herokuapp.com/review", dataValues)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                      title: "Good job!",
                      text: "Thanks for your Support!",
                      icon: "success",
                    });
                    e.target.reset()
                    dataValues = {};
                    setValue(2);
                }
            })
    }
    return (
      <div>
        <Container sx={{  my: 10 }}>
          <form onSubmit={handleReview} style={{textAlign: "left"}}>
            <TextField
              label="Experience"
              multiline
              rows={3}
              margin="normal"
              fullWidth
              onChange={handleField}
              required
            />
            <Typography sx={{ textAlign: "left" }} component="legend">
              Gives Rating (out of 5)
            </Typography>
            <Rating
              sx={{ width: "50%", textAlign: "left" }}
              name="simple-controlled"
              precision={0.5}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{ backgroundColor: "#21a06a", color: "#000" }}
            >
              Submit
            </Button>
          </form>
        </Container>
      </div>
    );
};

export default Review;