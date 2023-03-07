const { User } = require("../models");

const checkUserDB = async (email) => {
  return await User.findOne({ email });
};

const addNewUser = async (body) => {
  const { email, password } = body;

  const newUser = new User({ email, password });
  newUser.setPassword(password);

  return await newUser.save();
};

module.exports = {
  checkUserDB,
  addNewUser,
};
