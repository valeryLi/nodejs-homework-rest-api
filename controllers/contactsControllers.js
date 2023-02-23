const { listContacts } = require("../models/contacts");
// const { v4: uuidv4 } = require("uuid");

const getContactsList = async (_, res) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
};

module.exports = {
  getContactsList,
};
