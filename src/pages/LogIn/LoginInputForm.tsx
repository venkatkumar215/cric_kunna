import React from "react";
import {Button, TextField } from "@mui/material";
import "./LoginInputForm.modules.scss";
// import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";

const LoginInputForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <div className="cric_InputForm-input">
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="cric_Login-button">
        <Button type="submit" fullWidth variant="contained">
          Sing In
        </Button>
      </div>
    </Box>
  );
};

export default LoginInputForm;
