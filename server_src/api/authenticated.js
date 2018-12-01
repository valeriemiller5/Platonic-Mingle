module.exports = (req, res, next) => {
  // only call the next middleware if a user exists on the body
  if (req.user) return next();

  res.status(403).send('Unauthorized');
};
