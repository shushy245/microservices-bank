import "dotenv/config";

import startServer from "../express";
import connectToDatabase from "../mongoose";

connectToDatabase()
  .then(startServer)
  .catch((e) => {
    console.error("Failed to connect", e);
  });
