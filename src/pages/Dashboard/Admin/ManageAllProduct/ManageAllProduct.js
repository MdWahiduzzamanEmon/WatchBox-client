import { Button, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import axios from "axios";

import swal from "sweetalert";

const ManageAllProduct = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetch("https://polar-journey-34409.herokuapp.com/allProducts")
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  //delete
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `https://polar-journey-34409.herokuapp.com/deleteProducts/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              swal("Product has been deleted!", {
                icon: "success",
              });
              const restOrder = userData.filter(
                (userdata) => userdata._id !== id
              );
              setUserData(restOrder);
            }
          });
      } else {
        swal("Your Product is safe!");
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
            <TableContainer component={Paper} sx={{ mb: 10 }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>No:</TableCell>
                    <TableCell>Product Model</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Details</TableCell>
                    <TableCell align="left">Category</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData?.map((row, index) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        {row.name}
                      </TableCell>

                      <TableCell align="left" sx={{ fontWeight: "bold" }}>
                        ${row.price}
                      </TableCell>
                      <TableCell align="left" sx={{ fontWeight: "bold" }}>
                        {row.short_description}
                      </TableCell>
                      <TableCell align="left" sx={{ fontWeight: "bold" }}>
                        {row.category}
                      </TableCell>
                      <TableCell align="left">
                        <>
                          <Button onClick={() => handleDelete(row._id)}>
                            <i
                              className="fas fa-trash-alt"
                              style={{ color: "red" }}
                            ></i>
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
