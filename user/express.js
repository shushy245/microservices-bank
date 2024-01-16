import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import userRoute from "./src/api";

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(`/api/user`, userRoute);
  app.use(express.static(path.join(__dirname, "../../client")));

  app.listen("9000", () => console.log(`Listening to user at 9000!`));
};
