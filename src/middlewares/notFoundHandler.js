export const notFoundHandler = (_req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
};
