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

const { sendEmail } = require("./email");

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

  sendEmail,
};
