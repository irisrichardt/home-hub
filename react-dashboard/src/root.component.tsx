import { useEffect, useState } from "react";

import { AuthInfo, checkIsAuthenticated } from "@home-hub/react-utils";
import { DashboardRoutes } from "./routes";

export default function Root() {
  const [_, setAuthInfo] = useState<typeof AuthInfo | undefined>();

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
        <DashboardRoutes />
      </div>
    </>
  );
}
