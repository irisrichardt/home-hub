import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@home-hub/react-navbar",
  app: () => System.import<LifeCycles>("@home-hub/react-navbar"),
  activeWhen: (location) => location.pathname.includes("/"),
});

start({
  urlRerouteOnly: true,
});
