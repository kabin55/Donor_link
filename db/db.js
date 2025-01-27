import mongoose from "mongoose";

export function connectTODb() {
  const db_url = process.env.Db_url;
  mongoose.connect(db_url);
  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error(`error on database connection`);
  });

  db.once("connected ", () => {
    console.log(`Database connected successfully`);
  });
}
