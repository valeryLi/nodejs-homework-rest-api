const express = require("express");
const { registerController } = require("../../controllers");

const { asyncWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", asyncWrapper(registerController));
router.post("/login", asyncWrapper());

module.exports = router;
