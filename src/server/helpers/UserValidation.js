const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    name: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

const loginValidataion = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidataion = loginValidataion;
