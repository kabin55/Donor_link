import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectTODb } from "./config/db.js";
import { userRoute } from "./routes/user.route.js";
import { loginRoute } from "./routes/login.route.js";
import cors from "cors";

const app = express();

connectTODb();

app.use(cors());
app.use(express.json());

app.use("/", userRoute);
app.use("/login", loginRoute);

const Port = process.env.Port || 3000;
const host = process.env.Host || "127.0.0.1";
console.log(`Server will start at ${host}:${Port}`);
app.listen(Port, host, () => {
  console.log(`server is running at ${host}:${Port}`);
});
