/* eslint-disable @typescript-eslint/no-unused-vars */
import { Hono } from "hono";
import { handle } from "hono/vercel";

import country from "@/feature/country/server/route";

const app = new Hono().basePath("/api");

const routes = app
  .route("/country", country)

export const GET = handle(app)

export type AppType = typeof routes;