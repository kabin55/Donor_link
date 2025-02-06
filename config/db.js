import mongoose from "mongoose";

export function connectTODb() {
  const db_url = process.env.Db_url;
  mongoose
    .connect(db_url)
    .then(() => {
      console.log(`Database connected successfully to ${db_url}`);
    })
    .catch((err) => {
      console.error("Error connecting to database:", err);
    });
  const db = mongoose.connection;

  console.log(db_url);
  db.on("error", (err) => {
    // console.log(`error on database connection ${error}`);
    console.log(`error on database connection`, err);
  });

  db.once("connected ", () => {
    console.log(`Database connected successfully`);
  });
}
connectTODb();
