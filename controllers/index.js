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
} = require("./auth");

module.exports = {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
  subscriptionController,
  updateAvatarController,

  getContactsListController,
  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
};
