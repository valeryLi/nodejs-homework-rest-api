const { Contacts } = require("../models/schema");

const listContacts = async () => {
  return await Contacts.find({});
};

const getContactById = async (contactId) => {
  return await Contacts.findOne({ _id: contactId });
};

const addContact = async (body) => {
  return await Contacts.create(body);
};

const removeContact = async (contactId) => {
  return Contacts.findByIdAndRemove({ _id: contactId });
};

const updateContact = async (contactId, body) => {
  return Contacts.findByIdAndRemove({ _id: contactId }, body, { new: true });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
