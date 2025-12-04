import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().positive().required(),
  description: Joi.string().allow("").optional(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  price: Joi.number().positive().optional(),
  description: Joi.string().allow("").optional(),
});
