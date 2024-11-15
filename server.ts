import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

export const handler = createRequestHandler({
  // @ts-expect-error - Intentional version mismatch between Remix 1.x and 2.x
  build,
  mode: process.env.NODE_ENV,
  getLoadContext() {
    return {};
  },
});
