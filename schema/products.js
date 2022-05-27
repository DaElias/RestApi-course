import Joi from "joi";

const name = Joi.string().min(3).max(15);
const id = Joi.string().uuid();
const price = Joi.number().integer().min(5);
const url = Joi.string().uri();

const createProductSchema = Joi.object({
  id: id,
  name: name.required(),
  price: price.required(),
  url: url.required(),
});

const uppdateProductSchema = Joi.object({
  id: id.required(),
  name,
  price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

export { createProductSchema, uppdateProductSchema, getProductSchema };
