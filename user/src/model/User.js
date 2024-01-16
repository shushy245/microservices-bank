import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    balance: { type: Number, default: 0 },
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);

export default User;
