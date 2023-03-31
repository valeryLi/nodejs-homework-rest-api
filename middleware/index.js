const contactValidator = require("./contactValidator");
const { userValidator, userEmailVerify } = require("./userValidator");

const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  contactValidator,
  userValidator,
  userEmailVerify,
  authenticate,
  upload,
};
