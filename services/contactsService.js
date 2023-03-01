const { Contacts } = require("../db");

const listContacts = async () => {
  return await Contacts.find({});
};

const getContactById = async (contactId) => {
  return await Contacts.findById({ _id: contactId });
};

const addContact = async (body) => {
  return await Contacts.create(body);
};

const removeContact = async (contactId) => {
  return Contacts.findByIdAndDelete({ _id: contactId });
};

const updateContact = async (contactId, body) => {
  return Contacts.findByIdAndUpdate({ _id: contactId }, body, { new: true });
};

const updateStatusContact = async (contactId, body) => {
  return Contacts.findByIdAndUpdate({ _id: contactId }, body, { new: true });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
