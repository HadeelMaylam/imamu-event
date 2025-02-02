const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to:", process.env.DATABASE_URL); // Debugging
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};



module.exports = connectDB;
