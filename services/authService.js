const { User } = require("../models");

const checkUserDB = async (email) => {
  return await User.findOne({ email });
};

const findUserToVerify = async (verificationToken) => {
  return await User.findOne({ verificationToken });
};

const addNewUser = async (body) => {
  const { email, password, verificationToken } = body;

  const newUser = new User({ email, verificationToken });
  newUser.avatarGenerator(email);
  newUser.setPassword(password);

  return await newUser.save();
};

const findUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
};

const removeToken = async (id) => {
  return await User.findByIdAndUpdate(
    { _id: id },
    { token: null },
    {
      new: true,
    }
  );
};

module.exports = {
  checkUserDB,
  findUserToVerify,
  addNewUser,
  findUserById,
  updateUser,
  removeToken,
};
