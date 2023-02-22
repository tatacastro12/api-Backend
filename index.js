const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
 const songsRoute = require("./routes/music");

// settings
const app = express();
const port = process.env.PORT || 3030;

// middlewares
app.use(express.json());
 app.use("/", songsRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
