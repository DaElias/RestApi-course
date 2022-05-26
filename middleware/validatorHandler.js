import boom from "@hapi/boom";
//**Middleware dinamico */
const validatorHandler = (schema, property) => (req, res, next) => {
  const data = req[property];
  const { error } = schema.validate(data);
  if (error) next(boom.badRequest(error));
  next();
};
export default validatorHandler;
