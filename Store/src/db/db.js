const mongoose = require('mongoose');

const connectDB = async () => {
  // const MONGO_URL = "mongodb://127.0.0.1:27017/Portfolio"; // Hardcoded MongoDB URI
  const MONGO_URL=process.env.ATLUSE_DATA_BASE
  try {

    await mongoose.connect(MONGO_URL, {  // Use the hardcoded URI here
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
