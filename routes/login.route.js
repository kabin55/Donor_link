import { Router } from "express";
import { login } from "../controllers/loginCredentials.controller.js";

const loginRoute = Router();

loginRoute.get("/", (req, res) => {
  res.status(200).send(`You at login page (json as email, password)`);
});

loginRoute.post("/login", login);

export { loginRoute };
