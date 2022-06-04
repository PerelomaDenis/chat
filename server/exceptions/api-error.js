module.exports = class AprError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message)
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new AprError(401, 'Пользователь не авторизован')
  }

  static BadRequest(message, errors = []) {
    return new AprError(400, message, errors)
  }
}