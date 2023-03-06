const { User } = require("../models");

const checkUserDB = async (email) => {
  return await User.findOne({ email });
};

const addNewUser = async (body) => {
  return await User.create(body);
};

module.exports = {
  checkUserDB,
  addNewUser,
};
