require("dotenv").config();

const bCrypt = require("bcryptjs");

const { checkUserDB, updateUser } = require("../../services");
const { userValidator } = require("../../middleware");
const { RequestError } = require("../../helpers");

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const loginController = async (req, res) => {
  const { error } = userValidator.validate(req.body);
  const { email, password } = req.body;

  if (error) {
    throw RequestError(400, error.details[0].message);
  }

  const user = await checkUserDB(email, password);

  if (!user) {
    throw RequestError(401, "Email or password is wrong");
  }

  if (!user.verify) {
    throw RequestError(401, "First, verify your email address");
  }

  const passwordCompare = await bCrypt.compareSync(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const { subscription, avatarURL } = user;

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

  await updateUser(user._id, { token });

  return res.status(200).json({
    token,
    user: {
      email,
      subscription,
      avatarURL,
    },
  });
};

module.exports = loginController;
