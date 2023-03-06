const express = require("express");
const { registerController } = require("../../controllers");

const { asyncWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", asyncWrapper(registerController));

module.exports = router;
