import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import notificationRoute from "./src/api";

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(`/api/notification`, notificationRoute);
  app.use(express.static(path.join(__dirname, "../../client")));

  app.listen("9002", () => console.log(`Listening to notification at 9002!`));
};
