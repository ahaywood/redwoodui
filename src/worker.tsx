import { defineApp, ErrorResponse } from "rwsdk/worker";
import { route, render, prefix, layout } from "rwsdk/router";
import { Document } from "@/app/Document";
import { HomePage } from "@/app/pages/HomePage";
import { setCommonHeaders } from "@/app/headers";
import { DocsLayout } from "./app/layouts/DocsLayout";
import { DocsPage } from "./app/pages/DocsPage";
import { AvatarPage } from "./app/pages/docs/AvatarPage";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  render(Document, [
    route("/", HomePage),
    prefix(
      "/docs",
      layout(DocsLayout, [route("/", DocsPage), route("/avatar", AvatarPage)])
    ),
  ]),
]);
