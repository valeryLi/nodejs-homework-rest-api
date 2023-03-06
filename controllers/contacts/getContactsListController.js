const { listContacts } = require("../../services");

const getContactsListController = async (_, res) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
};

module.exports = getContactsListController;
