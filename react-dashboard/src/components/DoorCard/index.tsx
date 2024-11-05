import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";

import Box from "@mui/material/Box";
import { useState } from "react";

const DoorCard = () => {
  const [selectedDoor, setSelectedDoor] = useState({ door: "entrada", isOpen: false });
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const handleSnackbarClose = () => {
    setIsSnackbarVisible(false);
  };

  return (
    <>
      <Card sx={{ background: "#F5F5F5" }}>
        <CardContent sx={{ marginX: 5, marginY: 2 }}>
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Typography color={"#E65100"}>Portas</Typography>
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="simple-select-label">Porta</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                value={selectedDoor.door}
                label="Porta"
                onChange={({ target }) =>
                  setSelectedDoor({ ...selectedDoor, door: target.value.toString() })
                }
              >
                <MenuItem value="entrada">Entrada</MenuItem>
                <MenuItem value="serviço">Serviço</MenuItem>
                <MenuItem value="lateral">Lateral</MenuItem>
                <MenuItem value="garagem">Garagem</MenuItem>
              </Select>
            </FormControl>

            <Box display="flex" justifyContent="center" gap={2} mt={3}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#236284",
                  "&:hover": {
                    backgroundColor: "#072c3c",
                  },
                }}
                onClick={() => {
                  setSelectedDoor({ ...selectedDoor, isOpen: true });
                  setIsSnackbarVisible(true);
                }}
              >
                Abrir
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#6a7a83",
                  "&:hover": {
                    backgroundColor: "#383e3e",
                  },
                }}
                onClick={() => {
                  setSelectedDoor({ ...selectedDoor, isOpen: false });
                  setIsSnackbarVisible(true);
                }}
              >
                Trancar
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={isSnackbarVisible}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={`Porta ${selectedDoor.door} ${selectedDoor.isOpen ? "aberta" : "fechada"}.`}
      />
    </>
  );
};

export default DoorCard;
