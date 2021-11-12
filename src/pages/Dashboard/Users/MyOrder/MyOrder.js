import { Button, CircularProgress, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../../Hooks/useAuth";
import swal from "sweetalert";

const MyOrder = () => {
  const [userData, setUserData] = useState([]);
  const { user } = useAuth();
  const [isSpinner, setIsSpinener] = useState(true);
  useEffect(() => {
    setIsSpinener(true);
    setTimeout(() => {
       setIsSpinener(true);
      fetch(
        `https://polar-journey-34409.herokuapp.com/buyingdetails/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
           setIsSpinener(false);
        });
    }, 1000);
    
  }, [user.email]);

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
          .delete(
            `https://polar-journey-34409.herokuapp.com/buyingdetails/${id}`
          )
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
      <Container sx={{ my: 10 }}>
        {isSpinner ? (
          <CircularProgress color="success" />
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Model</TableCell>
                  <TableCell align="left">Number</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData?.map((row) => (
                  <TableRow
                    key={row?._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "bold" }}
                    >
                      {row?.product_name}
                    </TableCell>
                    <TableCell align="left" sx={{ fontWeight: "bold" }}>
                      {row?.number}
                    </TableCell>
                    <TableCell align="left" sx={{ fontWeight: "bold" }}>
                      {row?.address}
                    </TableCell>
                    <TableCell align="left" sx={{ fontWeight: "bold" }}>
                      {row?.status === "Shipped" && (
                        <span style={{ color: "green" }}>{row?.status}</span>
                      )}
                      {row?.status === "Cancel" && (
                        <span style={{ color: "red" }}>{row?.status}</span>
                      )}
                      {row?.status === "Pending" && (
                        <span style={{ color: "#017ca5" }}>{row?.status}</span>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      <>
                        {row?.status === "Shipped" ? (
                          <Button
                            disabled
                            onClick={() => handleDelete(row?._id)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        ) : (
                          <Button onClick={() => handleDelete(row?._id)}>
                            <i
                              className="fas fa-trash-alt"
                              style={{ color: "red" }}
                            ></i>
                          </Button>
                        )}
                      </>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
};

export default MyOrder;
