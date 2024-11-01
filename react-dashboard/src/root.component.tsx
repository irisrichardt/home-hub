import { Box, Grid } from "@mui/material";
import HeroCard from "./components/HeroCard";
import UsersCard from "./components/UsersCard";
import WaterCard from "./components/WaterCard";
import EnergyCard from "./components/EnergyCard";
import { useEffect, useState } from "react";

import { AuthInfo, checkIsAuthenticated } from "../../utils/src/home-hub-utils";
import EditProfile from "./components/EditProfile";

export default function Root() {
  const [authInfo, setAuthInfo] = useState<AuthInfo | undefined>();

  useEffect(() => {
    const { isAuthenticated, authInfo: authObj } = checkIsAuthenticated();

    if (!isAuthenticated) {
      return location.replace("/");
    }
    setAuthInfo(authObj);
  }, []);

  return (
    <>
      <div id="single-spa-application:@home-hub/react-dashboard">
        {location.pathname.includes("edit-profile") ? (
          <Box
            width={"auto"}
            maxWidth={"md"}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ margin: "auto" }}
          >
            <EditProfile />
          </Box>
        ) : (
          <Box width={2 / 3} my={4} display="flex" alignItems="center" gap={4} p={2} sx={{ margin: "auto" }}>
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
        )}
      </div>
    </>
  );
}
