import { Box, Grid } from "@mui/material";
import HeroCard from "../components/HeroCard";
import AcCard from "../components/AcCard";
import TableCard from "../components/TableCard";
import DoorCard from "../components/DoorCard";

const DevicesScreen = () => {
  return (
    <Box
      width={2 / 3}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ margin: "auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeroCard
            title="Dispositivos"
            subtitle="Controle seus dispositivos de perto ou de longe!"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <AcCard />
        </Grid>
        <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
          <TableCard />
        </Grid>
        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
          <DoorCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DevicesScreen;
