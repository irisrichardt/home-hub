import { Box, Grid } from "@mui/material";
import HeroCard from "../components/HeroCard";
import UsersCard from "../components/UsersCard";
import WaterCard from "../components/WaterCard";
import EnergyCard from "../components/EnergyCard";
import { checkIsAuthenticated } from "@home-hub/react-utils";
import Parcel from "single-spa-react/parcel";
import ReminderCard from "../components/ReminderCard";

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
        <Grid item xs={12}>
          <HeroCard title={heroCardTitle} subtitle={heroCardSubtitle} />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <UsersCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <WaterCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ReminderCard />
        </Grid>
        <Grid item sm={6} xs={12}>
          <EnergyCard currentMonthUsage={158} lastMonthUsage={100} />
        </Grid>
        <Grid item sm={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
          <Parcel
            config={() => System.import("@home-hub/vue-demo") as any}
            size={220}
            rooms={4}
            bathrooms={3}
            parkingSpaces={2}
            handleError={(err) => console.log(err)}
            parcelDidMount={() => console.log("Vue parcel mounted")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardScreen;
