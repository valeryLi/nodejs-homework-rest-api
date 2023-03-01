const express = require("express");

const router = express.Router();

const {
  getContactsListController,

  getContactByIdController,
  createContactController,
  removeContactController,
  updateContactController,
} = require("../../controllers");

const { asyncWrapper } = require("../../helpers");

router.get("/", asyncWrapper(getContactsListController));

router.get("/:contactId", asyncWrapper(getContactByIdController));

router.post("/", asyncWrapper(createContactController));

router.delete("/:contactId", asyncWrapper(removeContactController));

router.put("/:contactId", asyncWrapper(updateContactController));

router.patch("/:contactId/status", asyncWrapper());

module.exports = router;
