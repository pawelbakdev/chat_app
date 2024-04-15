function errorHandlerMiddleware(err, req, res, _) {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'dev' ? err.stack : {},
  });
}

export default errorHandlerMiddleware;
