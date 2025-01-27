import mongoose from "mongoose";

const profileCredentialsSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: [true, "First name is required"],
      minLength: [3, "must be of 3 characters"],
    },
    last_name: {
      type: String,
      require: [true, "Last name is required"],
      minLength: [3, "must be of 3 characters"],
    },
    age: {
      type: Number,
      require: [true, "Age is required"],
    },
    DOB: {
      type: Date,
      require: [true, "Date of birth is required"],
    },
    blood_group: {
      type: String,
      required: [true, "Blood type is required"],
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    contact: {
      type: BigInt,
      require: [true, "Contact number is required"],
      unique: true,
      match: [/^\d{10}$/, "Contact number must be valid and contain 10 digits"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Email must be valid"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("ProfileCredential", profileCredentialsSchema);
