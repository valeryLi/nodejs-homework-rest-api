const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("./contactsService");

const { checkUserDB, addNewUser } = require("./authService");

module.exports = {
  checkUserDB,
  addNewUser,
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
