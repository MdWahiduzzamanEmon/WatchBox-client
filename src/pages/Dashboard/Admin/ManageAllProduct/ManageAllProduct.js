import { Button, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from "react";
import axios from "axios";

import swal from "sweetalert";
import useAuth from "../../../../Hooks/useAuth";

const ManageAllProduct = () => {
  const [userData, setUserData] = useState([]);
    const { isLoading, setIsLoading } = useAuth();
    useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/allProducts/`)
          .then((res) => res.json())
          .then((data) => {
            setUserData(data);
            setIsLoading(false);
          });
      }, 1000);
    }, [setIsLoading]);

  //delete
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/deleteProducts/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal("Order has been deleted!", {
                icon: "success",
              });
              const restOrder = userData.filter(
                (userdata) => userdata._id !== id
              );
              setUserData(restOrder);
            }
          });
      } else {
        swal("Your Order is safe!");
      }
    });
  };

  return (
    <div>
      <Container sx={{ mt: 10 }}>
        {isLoading ? (
          <CircularProgress color="success" />
        ) : (
          <>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              Total Product : {userData.length}
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Model</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Details</TableCell>
                    <TableCell align="left">Category</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">${row.price}</TableCell>
                      <TableCell align="left">
                        {row.short_description}
                      </TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">
                        <>
                          <Button onClick={() => handleDelete(row._id)}>
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Container>
    </div>
  );
};

export default ManageAllProduct;
