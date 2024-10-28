import { Box, Grid } from "@mui/material";
import HeroCard from "./components/HeroCard";
import UsersCard from "./components/UsersCard";
import WaterCard from "./components/WaterCard";
import EnergyCard from "./components/EnergyCard";

export default function Root() {
  return (
    <>
      <div id="single-spa-application:@home-hub/react-dashboard">
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
              <HeroCard />
            </Grid>
            <Grid item sm={6} xs={12}>
              <UsersCard />
            </Grid>
            <Grid item sm={6} xs={12}>
              <WaterCard />
            </Grid>
            <Grid item sm={6} xs={12}>
              <EnergyCard currentMonthUsage={158} lastMonthUsage={100} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
