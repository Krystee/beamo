/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "netlify",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  ignoredRouteFiles: ["**/.*"],
};
