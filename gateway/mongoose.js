const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
  } catch (e) {
    console.error(e);
    throw e;
  }
};
