import { usercredential } from "../models/user.credential.model";

export async function signupCredentials(req, res) {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newUser = new usercredential({ email, username, password });
    const emailExists = await usercredential.find({ email: { $eq: email } });
    const userExists = await usercredential.find({
      username: { $eq: username },
    });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    } else if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    newUser.password = hashPassword;
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
