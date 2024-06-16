const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err)
  return res.status(err.statusCode).json({ msg: err.message })
}

module.exports = errorHandlerMiddleware
