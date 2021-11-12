import React, { useState } from 'react';
import { TextField, Container, InputAdornment,Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [inputValue, setInputValue] = useState("")
    
    const handleAdminInputValue = e => {
        setInputValue(e.target.value)
    }

   const handleMakeAdmin = (e) => {
     e.preventDefault();
     const value = { email: inputValue };
     fetch("https://polar-journey-34409.herokuapp.com/adminEmail", {
       method: "PUT",
       headers: {
         "content-type": "application/json",
         "authorization": `Bearer ${localStorage.getItem("idToken")}`,
       },
       body: JSON.stringify(value),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.modifiedCount) {
          swal({
            text: "Admin created successfully!",
            icon: "success",
          });
           setInputValue("");
           
         }
       });
   };

    return (
      <div>
        <Container className="makeAdminField">
          <TextField
            // fullWidth
            required
            className="adminTextField"
            label="Admin Email"
            onChange={handleAdminInputValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            margin="normal"
          />
          <Button
            onClick={handleMakeAdmin}
            variant="outlined"
            sx={{ backgroundColor: "#21a06a", color: "#000" }}
          >
            Make Admin
          </Button>
        </Container>
      </div>
    );
};

export default MakeAdmin;