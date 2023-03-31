const Joi = require("joi");

const userValidator = Joi.object({
  email: Joi.string().required().email().trim(),

  password: Joi.string()
    .required()
    .trim()
    .min(6)
    .strip()
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

const userEmailVerify = Joi.object({
  email: Joi.string().required().email().trim(),
});

module.exports = {
  userValidator,
  userEmailVerify,
};
