"use strict";

import serverless from "serverless-http";
import express from "express";

import renderer from "./middleware/renderer";

const app = express();

app.use(renderer);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

export const handler = serverless(app);
