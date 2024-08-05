const mongoose = require("mongoose");

const ConnectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected succesfully");
  } catch (error) {
    console.log(`error while connecting to database: ${error}`);
  }
};

module.exports = {
  ConnectMongoDB,
};
