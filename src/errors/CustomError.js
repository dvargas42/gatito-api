class CustomError extends Error {
  constructor(message, statusCode, id = 0) {
    super(message);
    this.statusCode = statusCode;
    this.id = id;
  }
}

module.exports = CustomError;
