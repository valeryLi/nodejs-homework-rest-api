const fs = require("fs/promises");
const { contactsPath } = require("../helpers");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");

  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();

  const contactsById = contacts.filter(({ id }) => id === contactId);

  return contactsById;
};

module.exports = { listContacts, getContactById };
