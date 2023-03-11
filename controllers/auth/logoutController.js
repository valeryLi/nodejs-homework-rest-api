const { removeToken } = require("../../services");

const logoutController = async (req, res) => {
  const { _id } = req.user;
  await removeToken(_id);

  return res.status(204).json({
    message: "Logout success",
  });
};

module.export = logoutController;
