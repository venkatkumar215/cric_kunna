import React from "react";
import { Button, TextField } from "@mui/material";
import "./LoginInputForm.modules.scss";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { logInForm } from "../../types";
import {useAppDispatch} from '../../stores/index'
 import { getAuth } from "../../stores/authentication";

const LoginInputForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<logInForm>();
  const dispatch =useAppDispatch();
  const onSubmit = handleSubmit((data) => {
    console.log('entered')
    dispatch(getAuth(data));
    
  });

  return (
    <Box component="form" onSubmit={onSubmit}>
      <div className="cric_InputForm-input">
        <TextField
          {...register("emailId", { required: true })}
          id="emailId"
          error={errors?.emailId ? true : false}
          name="emailId"
          helperText={errors?.emailId ? "Invalid Email ID" : ""}
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="password"
          {...register("password", { required: true })}
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          error={errors?.password ? true : false}
          helperText={errors?.password ? "Invalid Password ID" : ""}
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
