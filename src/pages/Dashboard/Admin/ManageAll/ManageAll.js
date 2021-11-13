import { Button, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import swal from "sweetalert";
import { Box } from "@mui/system";

const ManageAll = () => {
  const [userAllData, setUserAllData] = useState([]);
  const [getUpdateValue, setGetUpdateValue] = useState("");
  const [modified, setModified] = useState(false);
  useEffect(() => {
    axios
      .get("https://polar-journey-34409.herokuapp.com/buyingAlldetails")
      .then((res) => {
        setUserAllData(res.data);
      });
  }, [modified]);

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
              swal("User Order has been deleted!", {
                icon: "success",
              });
              const restOrder = userAllData.filter(
                (userdata) => userdata._id !== id
              );
              setUserAllData(restOrder);
            }
          });
      } else {
        swal("Users Order is safe!");
      }
    });
  };

  //status update

  const handleChange = (event) => {
    const newValue = event.target.value;
    const datas = {
      ...userAllData,
      status: newValue,
    };
    setGetUpdateValue(datas);
  };
  const handleupdate = (id) => {
    axios
      .put(
        `https://polar-journey-34409.herokuapp.com/buyingdetails/${id}`,
        getUpdateValue
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          swal("Satus Updated Successful!");
          setModified(!modified);
        }
      });
  };

  return (
    <div>
      <Container sx={{ my: 10 }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userAllData.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    {row.email}
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    {row.address}
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    ${row.price}
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    {row.product_name}
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    <>
                      <Box
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <FormControl variant="standard" sx={{ minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-standard-label">
                            Change Order Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={row.status}
                            onChange={handleChange}
                            sx={{ fontWeight: "bold" }}
                          >
                            <MenuItem
                              value={"Pending"}
                              sx={{ fontWeight: "bold" }}
                            >
                              Pending
                            </MenuItem>
                            <MenuItem
                              value={"Shipped"}
                              sx={{ fontWeight: "bold" }}
                            >
                              Shipped
                            </MenuItem>
                            <MenuItem
                              value={"Cancel"}
                              sx={{ fontWeight: "bold" }}
                            >
                              Cancel
                            </MenuItem>
                          </Select>
                        </FormControl>
                        <Button onClick={() => handleupdate(row._id)}>
                          <i
                            className="fas fa-edit"
                            style={{ color: "#21a06a" }}
                          ></i>
                        </Button>
                      </Box>
                    </>
                  </TableCell>
                  <TableCell align="center">
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
      </Container>
    </div>
  );
};

export default ManageAll;
