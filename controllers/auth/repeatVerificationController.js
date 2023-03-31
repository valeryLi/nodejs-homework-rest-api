const { RequestError } = require("../../helpers");
const { checkUserDB, sendEmail, verifyEmail } = require("../../services");
const { userEmailVerify } = require("../../middleware");

const repeatVerificationController = async (req, res) => {
  const { error } = userEmailVerify.validate(req.body);
  const { email } = req.body;

  if (!req.body) {
    throw RequestError(400, "missing required field email");
  }

  if (error) {
    throw RequestError(400, error.details[0].message);
  }

  const user = await checkUserDB(email);
  if (!user) {
    throw RequestError(404, "User not found");
  }

  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const mail = verifyEmail(email, user.verificationToken);

  await sendEmail(mail);

  return res.status(200).json({ message: "Verification email sent" });
};

module.exports = repeatVerificationController;
