// Importing necessary modules and dependencies
const express = require("express");
const applyMiddleWare = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectdb");
require("dotenv").config();

// Creating an Express application
const app = express();

// Setting up the port, using the environment variable if available, otherwise defaulting to 5000
const port = process.env.PORT || 5000;

// Importing authentication routes
const authenticationRoutes = require("./routes/authentication/index");

// Applying middleware to the Express app
applyMiddleWare(app);

// Using the authentication routes for the app
app.use(authenticationRoutes);

// Handling a simple health check endpoint
app.get("/health", (req, res) => {
  res.send("Education is running");
});

// Handling all other routes with a 404 error
app.all("*", (req, res, next) => {
  // Creating an error object for invalid URLs
  const error = new Error(`The requested URL is invalid [${req.url}]`);
  error.status = 404;
  next(error);
});

// Error handling middleware for the app
app.use((err, req, res, next) => {
  // Responding with an error status and message
  res.status(err.status || 500).json({
    message: err.message,
  });
});

// Asynchronous function to connect to the database and start the server
const main = async () => {
  // Connecting to the database
  await connectDB();

  // Starting the Express app on the specified port
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};

// Calling the main function to initiate the application
main();
