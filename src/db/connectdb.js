const mongoose = require("mongoose");
require("dotenv").config();
const getConnectionString = () => {
  let connnectionURI;
  if (process.env.NODE_ENV === "development") {
    const username = process.env.DB_USER;
    const password = process.env.DB_PASS;
    connnectionURI = process.env.DATA_URI.replace(
      "<username>",
      username
    ).replace("<password>", password);
  } else {
    connnectionURI = process.env.DATABASE_PROD;
  }
  return connnectionURI;
};

const connectDB = async () => {
  console.log("connecting to database...");
  const uri = getConnectionString();
  await mongoose.connect(uri, { dbName: process.env.DB_NAME });
  console.log("connected to database");
};
module.exports = connectDB;
