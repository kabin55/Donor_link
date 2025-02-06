import mongoose from "mongoose";

const userCredentialsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Email must be valid"],
      lowercase: true,
      trim: true,
      index: { unique: true },
    },
    username: {
      type: String,
      required: true,
      default: "new_user",
      minLength: [3, "must be of 3 characters"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userCredentials = new mongoose.model(
  "UserCredentials",
  userCredentialsSchema
);
export default userCredentials;
