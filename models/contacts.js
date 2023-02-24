const fs = require("fs/promises");
const { contactsPath } = require("../helpers");
const { v4: uuid } = require("uuid");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");

  return JSON.parse(data);
};

const getById = async (contactId) => {
  const contacts = await listContacts();

  const contactById = contacts.find((contact) => contact.id === contactId);

  if (!contactById) {
    return null;
  }

  return contactById;
};

const addContact = async (body) => {
  const newContact = { id: uuid().slice(0, 8), ...body };
  const { name, email, phone } = body;

  const contacts = await listContacts();

  const contactFinder = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  const emailFinder = contacts.find(
    (contact) => contact.email.toLowerCase() === email.toLowerCase()
  );

  const phoneFinder = contacts.find((contact) => contact.phone === phone);

  if (contactFinder || emailFinder || phoneFinder) {
    return null;
  }

  const newContent = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContent, null, 2), "utf8");

  return newContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();

  const newContent = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newContent));
  const upgradedContacts = await fs.readFile(contactsPath, "utf8");

  return JSON.parse(upgradedContacts);
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();

  const contactIndex = contacts.findIndex(({ id }) => id === contactId);

  if (contactIndex < 0) {
    return null;
  }

  contacts[contactIndex] = { ...contacts[contactIndex], ...body };

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf8");

  return contacts[contactIndex];
};

module.exports = {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
};
