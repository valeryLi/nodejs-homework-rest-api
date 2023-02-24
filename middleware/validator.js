const Joi = require("joi");

const contactValidator = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .min(2)
    .pattern(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/),

  email: Joi.string()
    .email()
    .trim()
    .required()
    .pattern(/(^$|^.*@.*\..*$)/),

  phone: Joi.string()
    .trim()
    .required()
    .pattern(/^\+?[\d\s()-]+$/),
});

module.exports = contactValidator;
