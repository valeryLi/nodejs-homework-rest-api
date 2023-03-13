const { listContacts } = require("../../services");

const getContactsListController = async (req, res) => {
  const { id: owner } = req.user;
  const { page, limit, favorite } = req.query;
  const skip = (page - 1) * limit;

  const contacts = await listContacts(owner, skip, limit, favorite);

  if (contacts < 1) {
    res.status(404).json({ message: "Not any contacts" });
  }

  res.status(200).json(contacts);
};

module.exports = getContactsListController;
