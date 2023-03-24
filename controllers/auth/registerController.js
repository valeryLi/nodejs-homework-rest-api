const { v4: uuidv4 } = require("uuid");
const {
  checkUserDB,
  addNewUser,
  verifyEmail,
  sendEmail,
} = require("../../services");

const { userValidator } = require("../../middleware");
const { RequestError } = require("../../helpers");

const registerController = async (req, res) => {
  const { error } = userValidator.validate(req.body);
  const { email } = req.body;

  const userExist = await checkUserDB(email);
  const verificationToken = uuidv4();

  const mail = verifyEmail(email, verificationToken);

  if (error) {
    throw RequestError(400, error.details[0].message);
  }

  if (userExist) {
    throw RequestError(409, "Emale in use");
  }
  const register = await addNewUser({
    ...req.body,
    verificationToken: verificationToken,
  });

  await sendEmail(mail);

  return res.status(201).json({
    user: {
      email: register.email,
      subscription: "starter",
    },
  });
};

module.exports = registerController;
