import { Box, Divider, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ReminderCard = () => {
  return (
    <Card sx={{ background: "#F5F5F5", width: "100%", height: "100%" }}>
      <CardContent>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Typography color={"#E65100"}>Lembretes</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ marginTop: 2 }}
        >
          <Typography variant="body2">Ligar para o Harry</Typography>
        </Box>
        <Divider sx={{ color: "#000000" }} style={{ marginTop: 8 }} />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ marginTop: 1 }}
        >
          <Typography variant="body2">Finalizar cursos de microfrontends</Typography>
        </Box>
        <Divider sx={{ color: "#000000" }} style={{ marginTop: 8 }} />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ marginTop: 1 }}
        >
          <Typography variant="body2">Publicar projeto no github</Typography>
        </Box>
        <Divider sx={{ color: "#000000" }} style={{ marginTop: 8 }} />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ marginTop: 1 }}
        >
          <Typography variant="body2">Ir no mercado</Typography>
        </Box>
        <Divider sx={{ color: "#000000" }} style={{ marginTop: 8 }} />
      </CardContent>
    </Card>
  );
};
export default ReminderCard;
