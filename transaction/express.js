import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import transactionRoute from "../transaction/src/api";

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(`/api/transaction`, transactionRoute);
  app.use(express.static(path.join(__dirname, "../../client")));

  app.listen("9001", () => console.log(`Listening to transaction at 9001!`));
};
