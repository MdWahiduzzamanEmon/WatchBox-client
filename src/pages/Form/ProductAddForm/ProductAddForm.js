import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';



const ProductAddForm = ({ singleProduct }) => {

  const [fieldValue, setFieldVAlue] = useState({});
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
      const newValue = { ...fieldValue };
      newValue[field]=value
    setFieldVAlue(newValue);
  };
    const onSubmit = (e) => {
        const data = {
            ...fieldValue,
             product_name: singleProduct.name,
          price: singleProduct.price,
         
        };
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          type="text"
          names="name"
          onChange={handleChange}
          defaultValue=""
          fullWidth
          variant="standard"
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          names="email"
          onChange={handleChange}
          fullWidth
          variant="standard"
          margin="normal"
        />
        <TextField
          label="Phone No"
          type="text"
          names="number"
          onChange={handleChange}
          defaultValue=""
          fullWidth
          variant="standard"
          margin="normal"
        />
        <TextField
          type="text"
          names="product_name"
          onChange={handleChange}
          value={singleProduct?.name}
          variant="standard"
          fullWidth
          margin="normal"
          readOnly
        />
        <TextField
          value={singleProduct?.price}
          variant="standard"
          names="price"
          fullWidth
          margin="normal"
          readOnly
        />
        <Button
          type="submit"
          variant="outlined"
          style={{ backgroundColor: "#21a06a", color: "#000" }}
        >
          Purchase Now
        </Button>
      </form>
    </div>
  );
};

export default ProductAddForm;