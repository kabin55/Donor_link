import bcrypt from "bcrypt";
import userCredentials from "../models/user.credential.model.js";

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    // return res.status(400).send("Please provide email and password");
    return res
      .status(400)
      .json({ success: false, message: "Please provide email and password" });
  }
  const user = await userCredentials.findOne({ email });
  if (!user) {
    return res.status(401).send("Invalid Username");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).send("Invalid Password");
  }
  res.status(200).json({ message: "Logged in successfully", user: user.email });
}
