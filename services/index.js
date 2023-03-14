const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("./contactsService");

const {
  checkUserDB,
  addNewUser,
  findUserById,
  updateUser,
  removeToken,
} = require("./authService");

module.exports = {
  checkUserDB,
  addNewUser,
  findUserById,
  updateUser,
  removeToken,

  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
