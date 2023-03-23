const express = require("express");
const {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
  subscriptionController,
  updateAvatarController,
  verificationController,
} = require("../../controllers");

const { asyncWrapper } = require("../../helpers");
const { authenticate, upload } = require("../../middleware");

const router = express.Router();

router.post("/signup", asyncWrapper(registerController));
router.post("/login", asyncWrapper(loginController));
router.post("/logout", authenticate, asyncWrapper(logoutController));
router.post("/current", authenticate, asyncWrapper(getCurrentUserController));
router.patch(
  "/subscription",
  authenticate,
  asyncWrapper(subscriptionController)
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  asyncWrapper(updateAvatarController)
);

router.get("/verify/:verificationToken", asyncWrapper(verificationController));

module.exports = router;
