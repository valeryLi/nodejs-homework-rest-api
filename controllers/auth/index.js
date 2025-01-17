const registerController = require("./registerController");
const loginController = require("./loginController");
const getCurrentUserController = require("./getCurrentUserController");
const logoutController = require("./logoutController");
const subscriptionController = require("./subscriptionController");
const updateAvatarController = require("./updateAvatarController");
const verificationController = require("./verificationController");
const repeatVerificationController = require("./repeatVerificationController");

module.exports = {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
  subscriptionController,
  updateAvatarController,
  verificationController,
  repeatVerificationController,
};
