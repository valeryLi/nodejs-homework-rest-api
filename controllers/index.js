const {
  getContactsListController,
  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contacts");

const { register } = require("./auth");

module.exports = {
  register,
  getContactsListController,
  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
};
