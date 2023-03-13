const { RequestError } = require("../../helpers");

const getCurrentUserController = async (req, res) => {
  if (!req.user) {
    throw RequestError(401, "Not authorized");
  }
  const { email, subscription } = req.user;

  res.status(200).json({ email, subscription });
};

module.exports = getCurrentUserController;
