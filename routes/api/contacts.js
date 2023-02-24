const express = require("express");

const router = express.Router();

const {
  getContactsList,
  getContactById,
  createContact,
  removeContactCtrl,
  updateContactCtrl,
} = require("../../controllers/contactsControllers");
const { asyncWrapper } = require("../../helpers");

router.get("/", asyncWrapper(getContactsList));

router.get("/:contactId", asyncWrapper(getContactById));

router.post("/", asyncWrapper(createContact));

router.delete("/:contactId", asyncWrapper(removeContactCtrl));

router.put("/:contactId", asyncWrapper(updateContactCtrl));

module.exports = router;
