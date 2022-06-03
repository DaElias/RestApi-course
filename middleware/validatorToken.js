const boom = require("@hapi/boom");

const validatorToken = (req, res, next) => {
  if (req.body.auth !== "activate") throw boom.unauthorized();
  next();
};
module.exports = validatorToken;
