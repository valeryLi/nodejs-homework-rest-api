const { updateStatusContact } = require("../../services");
const { isEmpty } = require("../../helpers");
const contactValidator = require("../../middleware");

const updateStatusContactController = async (req, res) => {
  const { contactId } = req.params;
  const body = req.body;
  const { error } = contactValidator.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (isEmpty(body)) {
    return res.status(400).json({ message: "missing fields" });
  }

  const contactStatusToUpdate = await updateStatusContact(contactId, body);

  if (!contactStatusToUpdate) {
    return res.status(404).json({ message: "Not found" });
  }

  return res.status(200).json(contactStatusToUpdate);
};

module.exports = updateStatusContactController;
