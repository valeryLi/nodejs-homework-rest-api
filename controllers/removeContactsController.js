const { removeContact } = require("../services");

const removeContactController = async (req, res) => {
  const { contactId } = req.params;

  const contactToRemove = await removeContact(contactId);

  if (!contactToRemove) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "contact deleted" });
};

module.exports = removeContactController;