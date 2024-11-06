import { Box, Grid } from "@mui/material";
import HeroCard from "../components/HeroCard";
import UsersCard from "../components/UsersCard";
import WaterCard from "../components/WaterCard";
import EnergyCard from "../components/EnergyCard";
import { checkIsAuthenticated } from "@home-hub/react-utils";
import Parcel from "single-spa-react/parcel";

const DashboardScreen: React.FC = () => {
  const { authInfo } = checkIsAuthenticated();

  const heroCardTitle = `Olá, ${
    authInfo?.firstName
      ? `${authInfo.firstName} ${authInfo.lastName}`
      : authInfo.email.split("@")[0].split(/[._]/)[0]
  }!`;

  const heroCardSubtitle = "Confira as informações da sua casa inteligente!";

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
      <Grid container spacing={2} alignItems="stretch">
        {" "}
        {/* Ensures all items stretch to the same height */}
        <Grid item xs={12}>
          <HeroCard title={heroCardTitle} subtitle={heroCardSubtitle} />
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
        {/* Ensuring the Parcel also stretches to match height */}
        <Grid item sm={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
          <Parcel
            config={() => System.import("@home-hub/vue-demo") as any}
            size={220}
            rooms={4}
            bathrooms={3}
            parkingSpaces={2}
            handleError={(err) => console.log(err)}
            parcelDidMount={() => console.log("Vue parcel mounted")}
            style={{ height: "100%" }} // Force height to fill available space
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardScreen;
