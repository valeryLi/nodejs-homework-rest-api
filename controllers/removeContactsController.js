const { removeContact } = require("../services");

const removeContactController = async (req, res) => {
  const { contactId: id } = req.params;

  const contactToRemove = await removeContact(id);

  if (!contactToRemove) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "Contact deleted" });
};

module.exports = removeContactController;
