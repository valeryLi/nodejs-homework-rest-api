const getContactsListController = require("./getContactsListController");
const getContactByIdController = require("./getContactByIdController");
const createContactController = require("./createContactController");
const removeContactController = require("./removeContactsController");
const updateContactController = require("./updateContactController");
const updateStatusContactController = require("./updateStatusContactController");

module.exports = {
  getContactsListController,
  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
};
