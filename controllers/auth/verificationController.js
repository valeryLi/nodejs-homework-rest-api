const { RequestError } = require("../../helpers");
const { findUserToVerify, updateUser } = require("../../services");

const verificationController = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await findUserToVerify(verificationToken);
  // console.log(user);

  if (!user) {
    throw RequestError(404, "User not found");
  }

  await updateUser(user._id, { verify: true, verificationToken: null });

  return res.status(200).json({ message: "Verification successful" });
};

module.exports = verificationController;
