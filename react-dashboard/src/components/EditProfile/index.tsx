import { Box, Button, Snackbar, TextField } from "@mui/material";

import { useForm } from "react-hook-form";

import { AuthInfo, checkIsAuthenticated, editAuthInfo } from "@home-hub/react-utils";

import Parcel from "single-spa-react/parcel";
import { useState } from "react";

type FormValues = Omit<typeof AuthInfo, "authId">;

const EditProfile = () => {
  const { authInfo } = checkIsAuthenticated();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: authInfo });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);

  const onSubmit = (data: FormValues) => {
    setIsVisible(false);
    editAuthInfo({ ...data, authId: authInfo.authId });
    setIsSnackbarVisible(true);
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
        sx={{ marginTop: "16px", marginX: "32px" }}
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", {
          required: "Campo de e-mail obrigatório.",
          pattern: { value: /\S+@\S+\.\S+/, message: "E-mail inválido" },
        })}
      />
      <TextField
        id="firstName"
        label="Nome"
        variant="standard"
        type="text"
        sx={{ marginTop: "16px", marginX: "32px" }}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        {...register("firstName")}
      />
      <TextField
        id="lastName"
        label="Sobrenome"
        variant="standard"
        type="text"
        sx={{ marginTop: "16px", marginX: "32px" }}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        {...register("lastName")}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#236284",
          marginTop: "50px",
          marginX: "32px",
          mx: "auto",
          "&:hover": {
            backgroundColor: "#072c3c",
          },
        }}
        onClick={() => setIsVisible(true)}
      >
        Editar perfil
      </Button>
      {isVisible && (
        <Parcel
          config={() => System.import("@home-hub/react-parcel") as any}
          description="Confirmar as alterações?"
          isVisible={isVisible}
          leftBtnFn={() => setIsVisible(false)}
          leftBtnText="Cancelar"
          rightBtnFn={handleSubmit(onSubmit)}
          rightBtnText="Confirmar"
          title="HomeHub"
        />
      )}
      {isSnackbarVisible && (
        <Snackbar
          open={isSnackbarVisible}
          autoHideDuration={2000}
          onClose={() => setIsSnackbarVisible(false)}
          message="Informações alteradas com sucesso!"
        />
      )}
    </Box>
  );
};

export default EditProfile;
