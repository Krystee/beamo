import { createRequestHandler } from "@remix-run/netlify";
import * as remixBuild from "@remix-run/dev/server-build";

export const handler = createRequestHandler({
  // @ts-expect-error - Intentional version mismatch between Remix 1.x and 2.x
  build: remixBuild,
  mode: process.env.NODE_ENV,
  getLoadContext() {
    return {};
  },
});
