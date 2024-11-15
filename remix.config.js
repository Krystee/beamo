/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "netlify",
  server:
    process.env.NODE_ENV === "development"
      ? undefined
      : "./netlify/functions/server.js",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  serverBuildPath: "netlify/functions/server.js",
  assetsBuildDirectory: "public/build",
};
