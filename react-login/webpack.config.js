const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "home-hub",
    projectName: "react-login",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@home-hub/react-utils"],
  });
};
