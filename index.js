"use strict";

import serverless from "serverless-http";
import express from "express";

import renderer from "./middleware/renderengine";

import path from "path";

const app = express();

// root (/) should always serve our server rendered page
app.use("^/$", renderer);
// other static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, "./client/", "build"), {
    maxAge: "30d"
  })
);

export const handler = serverless(app);
