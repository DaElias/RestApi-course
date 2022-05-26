const boomHandleError = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json({ error: output.payload });
  }
  next();
};


export { boomHandleError };
