import HttpStatus, { StatusCodes } from "http-status-codes";

class CustomErrorHandler extends Error {
  status: number;
  field: string;
  errorMessage: string;
  constructor(status: number, field: string, errorMessage: string) {
    super(errorMessage);
    this.status = status;
    this.field = field;
    this.errorMessage = errorMessage;
  }

  static alreadyExist(field: string, message: string) {
    return new CustomErrorHandler(HttpStatus.CONFLICT, field, message);
  }

  static wrongCredentails(
    field: string,
    message: string = "Username or password is wrong!"
  ) {
    return new CustomErrorHandler(HttpStatus.UNAUTHORIZED, field, message);
  }

  static unAuthorized(field: string, message: string = "unAuthorized") {
    return new CustomErrorHandler(HttpStatus.UNAUTHORIZED, field, message);
  }

  static notFound(field: string, message: string = "404 Not Found") {
    return new CustomErrorHandler(HttpStatus.NOT_FOUND, field, message);
  }

  static serverError(field: string, message: string = "Internal server error") {
    return new CustomErrorHandler(
      HttpStatus.INTERNAL_SERVER_ERROR,
      field,
      message
    );
  }
}

export default CustomErrorHandler;
