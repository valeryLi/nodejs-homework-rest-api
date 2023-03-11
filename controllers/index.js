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
} = require("./auth");

module.exports = {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
  subscriptionController,
  getContactsListController,
  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
};
