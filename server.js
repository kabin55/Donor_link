import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectTODb } from "./db/db.js";
import { userRoute } from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use("/", userRoute);

const Port = process.env.Port || 3000;
const host = process.env.Host || "127.0.0.1";

app.listen(Port, host, () => {
  console.log(`server is running at ${host}:${Port}`);
});
