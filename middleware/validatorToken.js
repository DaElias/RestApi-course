import boom from "@hapi/boom";

const validatorToken = (req, res, next) => {
  if (req.body.auth !== "activate") throw boom.unauthorized();
  next();
};

export default validatorToken;
