import { ProfileCredential } from "../models/profile.credential.model";

export async function createProfile(req, res) {
  try {
    const profile = new ProfileCredential(req.body);
    const result = await profile.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
