const express = require("express");
const {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
} = require("../../controllers");

const { asyncWrapper } = require("../../helpers");
const { authenticate } = require("../../middleware");

const router = express.Router();

router.post("/signup", asyncWrapper(registerController));
router.post("/login", asyncWrapper(loginController));
router.post("/logout", authenticate, asyncWrapper(logoutController));
router.get("/current", authenticate, asyncWrapper(getCurrentUserController));

module.exports = router;
