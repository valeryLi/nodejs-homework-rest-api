const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  res.status(500).json({ message: error.message });
};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

module.exports = {
  asyncWrapper,
  errorHandler,
  isEmpty,
};
