const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      dbName: 'eshop'
    });
    console.log("MongoDB has been connected successfully!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
