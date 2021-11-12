import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import swal from "sweetalert";

const ProductAddForm = ({ singleProduct }) => {
  const { user } = useAuth();
  const values = { name: user?.displayName };
  const [fieldValue, setFieldVAlue] = useState(values);
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...fieldValue };
    newValue[field] = value;
    setFieldVAlue(newValue);
  };
  const onSubmit = (e) => {
    const dataVAlue = {
      ...fieldValue,
      product_name: singleProduct.name,
      price: singleProduct.price,
      number: fieldValue.number,
      email: user?.email,
      status: "Pending",
    };

    axios
      .post(
        "https://polar-journey-34409.herokuapp.com/buyingdetails/",
        dataVAlue
      )
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            text: "Purchase Successful",
            icon: "success",
          });
          e.target.reset();
          setFieldVAlue({});
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={user?.displayName}
          fullWidth
          variant="standard"
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={user?.email || ""}
          fullWidth
          variant="standard"
          margin="normal"
          readOnly
        />
        <TextField
          type="text"
          name="product_name"
          onChange={handleChange}
          value={singleProduct?.name || ""}
          variant="standard"
          fullWidth
          margin="normal"
          readOnly
        />
        <TextField
          label="Phone No"
          type="text"
          name="number"
          onChange={handleChange}
          fullWidth
          variant="standard"
          margin="normal"
          required
        />
        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={3}
          name="address"
          onChange={handleChange}
          variant="standard"
          margin="normal"
          required
          fullWidth
        />

        <TextField
          value={singleProduct?.price || ""}
          variant="standard"
          name="price"
          fullWidth
          margin="normal"
          readOnly
        />
        <Button
          type="submit"
          variant="outlined"
          style={{ backgroundColor: "#21a06a", color: "#000" }}
          // onClick={handlePurchase}
        >
          Purchase Now
        </Button>
      </form>
    </div>
  );
};

export default ProductAddForm;
