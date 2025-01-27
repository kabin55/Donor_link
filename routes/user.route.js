import { Router } from "express";

const userRoute = new Router();

userRoute.get("/", (req, res) => {
  res.status(200).send(`welcome`);
});

export { userRoute };
