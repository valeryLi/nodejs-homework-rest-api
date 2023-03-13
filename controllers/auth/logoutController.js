const { removeToken } = require("../../services");

const logoutController = async (req, res) => {
  const { id } = req.user;

  await removeToken(id);

  return res.status(204).json({
    data: "Logout success",
  });
};

module.exports = logoutController;
