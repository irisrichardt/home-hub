import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <TextField
        id="email"
        label="Email"
        variant="standard"
        sx={{ marginTop: "16px", marginX: "16px" }}
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", {
          required: "Campo de e-mail obrigatório.",
          pattern: { value: /\S+@\S+\.\S+/, message: "E-mail inválido" },
        })}
      />
      <TextField
        id="password"
        label="Senha"
        variant="standard"
        type={showPassword ? "text" : "password"}
        sx={{ marginTop: "16px", marginX: "16px" }}
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register("password", { required: "Senha obrigatória." })}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: 2 }}>
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? (
                    <VisibilityIcon fontSize="small" />
                  ) : (
                    <VisibilityOffIcon fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#236284",
          marginTop: "30px",
          marginX: "16px",
        }}
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
