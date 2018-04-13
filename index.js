"use strict";

import serverless from "serverless-http";
import express from "express";

import renderer from "./middleware/renderengine";

import path from "path";

const app = express();

// root (/) should always serve our server rendered page
app.use("^/$", renderer);

// serve static asset
app.use(express.static(path.join(__dirname, "./build")));

// handler
export const handler = serverless(app);
