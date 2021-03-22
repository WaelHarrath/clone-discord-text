//imports
const mongoose = require("mongoose");

//connection to DB
const connectDB = async () => {
  try {
    let result = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB Connected");
  } catch (e) {
    console.log("Can not connect to DB", e);
  }
};
//exportation
module.exports = connectDB;
