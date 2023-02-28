const mongoose = require("mongoose");
const { getConnectionURI } = require("./utils");

const connectMongo = async () => {
  mongoose.set("strictQuery", false);

  const uri = getConnectionURI();

  return (
    mongoose.connect(uri), { useNewUrlParser: true, useUnifiedTopology: true }
  );
};

module.exports = connectMongo;