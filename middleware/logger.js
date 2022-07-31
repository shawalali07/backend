const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  // It will move to next middleware in cycle
  next();
};

module.exports = logger;
