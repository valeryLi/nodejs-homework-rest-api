const { checkUserDB, addNewUser } = require("../../services");

const { userValidator } = require("../../middleware/userValidator");

const registerController = async (req, res) => {
  const { error } = userValidator.validate(req.body);
  const { email, password } = req.body;
  const userExist = await checkUserDB(email);

  if (error) {
    return res
      .status(400)
      .json({ message: "Ошибка от Joi или другой библиотеки валидации" });
  }

  if (userExist) {
    return res.status(409).json({ message: "Emale in use" });
  }
  const register = await addNewUser({ email, password });

  res.status(201).json({
    user: {
      email: register.email,
      subscription: "starter",
    },
  });
};

module.exports = registerController;
