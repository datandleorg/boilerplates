const Joi = require('joi');

const userSchema = {
    create: Joi.object({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    }),
    update: Joi.object({
        name: Joi.string().min(3),
        email: Joi.string().email(),
        password: Joi.string().min(6)
    })
};

module.exports = userSchema;