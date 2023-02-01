const mongoose = require("mongoose");
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected with MongoDb");
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB", err);
  });
