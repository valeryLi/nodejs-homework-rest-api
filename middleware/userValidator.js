const Joi = require("joi");

const userValidator = Joi.object({
  email: Joi.string()
    .required()
    .trim()
    .pattern(/(^$|^.*@.*\..*$)/),

  password: Joi.string()
    .required()
    .trim()
    .min(6)
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

module.exports = userValidator;
