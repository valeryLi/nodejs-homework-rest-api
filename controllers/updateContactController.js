const { updateContact } = require("../services");
const contactValidator = require("../middleware/validator");

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const body = req.body;
  const isEmpty = Object.keys(body);
  const { error } = contactValidator.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (isEmpty.length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }

  const contactToUpdate = await updateContact(contactId, body);

  if (!contactToUpdate) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json(contactToUpdate);
};

module.exports = updateContactController;
