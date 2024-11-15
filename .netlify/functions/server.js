var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// netlify/functions/server.ts
import { createRequestHandler } from "@remix-run/netlify";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/components/CapitalGainsCard.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var CapitalGainsCard = () => /* @__PURE__ */ jsx3("div", { className: "bg-black p-4 lg:p-8", children: /* @__PURE__ */ jsxs2("div", { className: "w-full px-4 lg:px-6 py-2 bg-[#161618] rounded-[10px] border border-[#2C2C30] flex flex-col lg:inline-flex lg:flex-row items-center gap-4 lg:gap-6 font-['Montserrat']", children: [
  /* @__PURE__ */ jsxs2("div", { className: "w-full lg:flex-1 flex flex-col gap-3.5", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsx3("div", { className: "w-[3px] h-5 bg-[#F3C762] rounded-[10px]" }),
      /* @__PURE__ */ jsx3("div", { className: "text-[#F2F2F2] text-base lg:text-[18px] font-normal leading-[27px]", children: "TOTAL CAPITAL GAINS" })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx3("div", { className: "text-white text-xl lg:text-[24px] font-medium leading-9 tracking-[0.48px]", children: "$227.169,85" }),
      /* @__PURE__ */ jsx3("div", { className: "text-[#B4B4B4] text-sm font-normal leading-[21px]", children: "USD" })
    ] })
  ] }),
  /* @__PURE__ */ jsxs2("div", { className: "w-full lg:w-[103px] flex lg:flex-col gap-3.5", children: [
    /* @__PURE__ */ jsx3("button", { className: "flex-1 lg:flex-none h-[33px] px-6 py-3.5 bg-transparent rounded-md border border-[#E14E18] inline-flex justify-center items-center shadow-[inset_0px_7.4px_18.5px_rgba(255,255,255,0.11)]", children: /* @__PURE__ */ jsx3("span", { className: "text-white text-xs font-medium", children: "View Tax" }) }),
    /* @__PURE__ */ jsx3("button", { className: "flex-1 lg:flex-none h-[33px] px-6 py-3.5 bg-transparent rounded-md border border-[#2C2C30] inline-flex justify-center items-center shadow-[inset_0px_7.4px_18.5px_rgba(255,255,255,0.11)]", children: /* @__PURE__ */ jsx3("span", { className: "text-white text-xs font-normal", children: "Export" }) })
  ] }),
  /* @__PURE__ */ jsx3("div", { className: "hidden lg:block w-0 self-stretch border border-[#2C2C30]" }),
  /* @__PURE__ */ jsxs2("div", { className: "w-full flex flex-col lg:flex-row items-stretch lg:items-center gap-2", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex-1 lg:w-[198px] p-4 rounded-[10px] border border-[#2C2C30] flex flex-col justify-center gap-2", children: [
      /* @__PURE__ */ jsx3("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2.5 h-[21px]", children: [
        /* @__PURE__ */ jsx3("div", { className: "w-[3px] h-5 bg-[#759D04] rounded-[10px]" }),
        /* @__PURE__ */ jsx3("div", { className: "text-[#F2F2F2] text-sm font-normal leading-[21px]", children: "SHORT TERM" })
      ] }) }),
      /* @__PURE__ */ jsx3("div", { className: "flex justify-between items-end", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx3("div", { className: "text-[#759D04] text-xl lg:text-[24px] font-medium leading-9 tracking-[0.48px]", children: "+$20,300" }),
        /* @__PURE__ */ jsx3("div", { className: "text-[#ACB5BB] text-sm font-normal leading-[21px]", children: "USD" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "flex-1 lg:w-[198px] p-4 rounded-[10px] border border-[#2C2C30] flex flex-col justify-center gap-2", children: [
      /* @__PURE__ */ jsx3("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2.5 h-[21px]", children: [
        /* @__PURE__ */ jsx3("div", { className: "w-[3px] h-5 bg-[#E36030] rounded-[10px]" }),
        /* @__PURE__ */ jsx3("div", { className: "text-[#F2F2F2] text-sm font-normal leading-[21px]", children: "LONG TERM" })
      ] }) }),
      /* @__PURE__ */ jsx3("div", { className: "flex justify-between items-end", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx3("div", { className: "text-[#E14E18] text-xl lg:text-[24px] font-medium leading-9 tracking-[0.48px]", children: "-$5000" }),
        /* @__PURE__ */ jsx3("div", { className: "text-[#ACB5BB] text-sm font-normal leading-[21px]", children: "USD" })
      ] }) })
    ] })
  ] })
] }) }), CapitalGainsCard_default = CapitalGainsCard;

// app/routes/_index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var meta = () => [
  { title: "Capital Gains Dashboard" },
  { name: "description", content: "Capital Gains Dashboard" }
];
function Index() {
  return /* @__PURE__ */ jsx4("div", { className: "min-h-screen bg-black", children: /* @__PURE__ */ jsx4(CapitalGainsCard_default, {}) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7GFXHO4N.js", imports: ["/build/_shared/chunk-ACO73CVB.js", "/build/_shared/chunk-43PMWAD2.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-QJCQ4UGS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6QJEUBZS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "63646b33", hmr: void 0, url: "/build/manifest-63646B33.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1, unstable_routeConfig: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};

// netlify/functions/server.ts
var handler = createRequestHandler({
  // @ts-expect-error - Intentional version mismatch between Remix 1.x and 2.x
  build: server_build_exports,
  mode: "production",
  getLoadContext() {
    return {};
  }
});
export {
  handler
};
