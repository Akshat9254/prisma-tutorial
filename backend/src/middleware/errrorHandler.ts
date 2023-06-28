import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { CustomErrorHandler } from "../service";
import { ApiResponse, ErrorDto } from "../types";

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  let errors: ErrorDto[] = [];
  if (err instanceof CustomErrorHandler) {
    statusCode = err.status;
    errors.push({ field: err.field, errorMessage: err.errorMessage });
  }

  const response: ApiResponse<null> = {
    status: "failure",
    errors,
  };
  res.status(statusCode).json(response);
};

export default errorHandlerMiddleware;
