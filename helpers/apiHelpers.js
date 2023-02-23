const path = require("path");
const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    try {
      controller(req, res);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = { asyncWrapper, contactsPath };
