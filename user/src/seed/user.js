const fs = require("fs");
const mongoose = require("mongoose");

const User = require("../model/User");

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
    fs.readFile("./src/seed/users.json", "utf8", (err, usersJSON) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        process.exit(1);
      }

      const { data: users } = JSON.parse(usersJSON);

      User.insertMany(users)
        .then(() => {
          console.log("Users seeded successfully!");
        })
        .catch((err) => {
          console.error("Error inserting users:", err);
        })
        .finally(() => mongoose.connection.close());
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
