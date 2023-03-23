const {
  getContactsListController,
  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contacts");

const {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
  subscriptionController,
  updateAvatarController,
  verificationController,
} = require("./auth");

module.exports = {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
  subscriptionController,
  updateAvatarController,
  verificationController,

  getContactsListController,
  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
};
