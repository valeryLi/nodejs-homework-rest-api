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
  findUserToVerify,
  addNewUser,
  findUserById,
  updateUser,
  removeToken,
} = require("./authService");

const { sendEmail, verifyEmail } = require("./email");

module.exports = {
  checkUserDB,
  findUserToVerify,
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
  verifyEmail,
};
