import { React, useState } from "react";
import { TextField, Typography, Button, Paper } from "@mui/material";
import "./login.css";

export const LogIn = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUserChange = (e) => {
    setSuccess("");
    setUserError("");
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setSuccess("");
    setPasswordError("");
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (user !== "") {
      const userRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (userRegex.test(user)) {
        setUserError("");
        if (password !== "") {
          const passwordRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (passwordRegex.test(password)) {
            setPasswordError("");
          }
          if (user === "Sadiya@123") {
            if (password === "Sadiya@1234") {
              setSuccess("you are succesfully");
              window.location.href = "http://localhost:3000/Home";
            } else {
              setPasswordError("Your password doesnot match");
            }
          } else {
            setUserError("Your data doesnot match");
          }
        } else {
          setPasswordError("inviled Password");
        }
      } else {
        setUserError("invalid User");
      }
    } else {
      setUserError("User Required");
    }
    if (password !== "") {
    } else {
      setPasswordError("Password Required");
    }
  };

  return (
    <div className="mainDiv">
      <Paper>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
          <Typography variant="h3">Login</Typography>
          <div className="success">{success && <div>{success}</div>}</div>
          <TextField
            label="User Name"
            variant="outlined"
            //   fullWidth
            className="form-input"
            onChange={handleUserChange}
            value={user}
          />
          <br /> <br />
          <div className="UserError">{userError && <div>{userError}</div>}</div>
          <label htmlFor=""></label>
          <TextField
            label="Password"
            variant="outlined"
            className="form-input"
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <br /> <br />
          <div className="PaswrdError">
            {passwordError && <div>{passwordError}</div>}
          </div>
          <br />
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="Submit"
            onClick={handleFormSubmit}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};
