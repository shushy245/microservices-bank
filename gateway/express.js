import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import userRoute from "./src/api";

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(`/api`, userRoute);
  app.use(express.static(path.join(__dirname, "../../client")));

  app.listen("8080", () => console.log(`Listening at 8080!`));
};
