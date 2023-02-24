const {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
} = require("../models/contacts");

const contactValidator = require("../middleware/validator");

const getContactsList = async (_, res) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getById(contactId);

  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json(contact);
};

const createContact = async (req, res) => {
  const { error } = contactValidator.validate(req.body);
  const { name, email, phone } = req.body;
  const requiredField = !name || !email || !phone;
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (requiredField) {
    return res.status(400).json({ message: "missing required fields" });
  }

  const newContact = await addContact(req.body);

  if (!newContact) {
    return res.status(400).json({ message: "Contact is already exist" });
  }

  return res.status(200).json(newContact);
};

const removeContactCtrl = async (req, res) => {
  const { contactId } = req.params;

  const contactToRemove = await removeContact(contactId);

  if (!contactToRemove) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "contact deleted" });
};

const updateContactCtrl = async (req, res) => {
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

module.exports = {
  getContactsList,
  getContactById,
  createContact,
  removeContactCtrl,
  updateContactCtrl,
};
