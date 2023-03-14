const registerController = require("./registerController");
const loginController = require("./loginController");
const getCurrentUserController = require("./getCurrentUserController");
const logoutController = require("./logoutController");
const subscriptionController = require("./subscriptionController");
const updateAvatarController = require("./updateAvatarController");

module.exports = {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
  subscriptionController,
  updateAvatarController,
};
