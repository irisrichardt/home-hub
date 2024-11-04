import { Box, Grid } from "@mui/material";
import HeroCard from "../components/HeroCard";
import AcCard from "../components/AcCard";
import TableCard from "../components/TableCard";

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
        <Grid item sm={4} xs={12} display={"inline-grid"}>
          <AcCard />
        </Grid>
        <Grid item sm={8} xs={12}>
          <TableCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DevicesScreen;
