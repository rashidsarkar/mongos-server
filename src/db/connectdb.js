const mongoose = require("mongoose");
require("dotenv").config();
const getConnectionString = () => {
  let connnectionURI;
  if (process.env.NODE_ENV === "development") {
    connnectionURI = process.env.DATABASE_LOCAL;
    connnectionURI.repeat("<username>", process.env.DATABASE_LOCAL_USERNAME);
    connnectionURI.repeat("<pass>", process.env.DATABASE_LOCAL_PASSWORD);
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
