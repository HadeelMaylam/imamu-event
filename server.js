require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/authRoutes.js"));
app.use("/users", require("./routes/userRoutes.js"));
// app.use("/api", require("./routes/registrationRoutes"));

// راوت مو موجود في السيرفر 
app.all("*", (req, res) => {
  res.status(404)
  if(req.accepts("html")){
    res.sendFile(path.join(__dirname, "Users", "404.html"));
  }else if(req.accepts("json")){
    res.json({message: "404 Not Found "});
  }else{
    res.type("txt").send("404 Not Found");
  }
});




mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

