const express = require("express");
const applyMiddleWare = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middle ware
applyMiddleWare(app);

app.get("/health", (req, res) => {
  res.send("Education is running");
});

app.all("*", (req, res, next) => {
  // console.log(req.url);
  const error = new Error(`the requested url is invalid [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
