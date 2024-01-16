const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", schema);

module.exports = Transaction;
