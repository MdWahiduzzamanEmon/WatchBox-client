import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import useAuth from "../../../../Hooks/useAuth";
import { TextField, Button } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
const ENDPOINT = "https://ancient-springs-31397.herokuapp.com/";
let socket;
const Chats = () => {
  // const { user, logOut, isloading } = useFirebase();
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [id, setid] = useState();
  const name = user?.displayName;

  const send = (e) => {
    e.preventDefault();
    socket.emit("message", { message, id });
    e.target.reset();
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, {
      transports: ["websocket"],
    });
    if (!user) {
      return;
    }
    socket.on("connect", () => {
      // alert("connected");
      setid(socket.id);
    });
    socket.emit("joined", { name });

    socket.on("welcome", (data) => {
      setChatMessages([...chatMessages, data]);
    });
    socket.on("userJoined", (data) => {
      setChatMessages([...chatMessages, data]);
    });
    socket.on("leave", (data) => {
      setChatMessages([...chatMessages, data]);
    });

    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, [name, user]);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setChatMessages([...chatMessages, data]);
    });
    return () => {
      socket.off();
    };
  }, [chatMessages]);

  return (
    <>
      <Navbar />
      <div
        // className="border rounded-3 w-75 mx-auto mt-5 height "
        style={{
          border: "1px solid #e5e5e5",
          borderRadius: "5px",
          width: "75%",
          margin: "0 auto",
          // marginTop: "5%",
          marginBottom: "1%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <ReactScrollToBottom className="div-height">
          {chatMessages?.map((msg, index) => (
            <Message
              key={index}
              user={msg.id === id ? "" : msg.user}
              message={msg.message}
              classs={msg.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>
        <div className="send_fileldF">
          {" "}
          <form
            onSubmit={send}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Form.Control
                size="lg"
                type="text"
                placeholder="Text..."
                onChange={(e) => setMessage(e.target.value)}
              /> */}
            <TextField
              size="lg"
              type="text"
              placeholder="Text..."
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
            />
            <Button className=" button2" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chats;
