import { Request, NextFunction, Response } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof RequestValidationError) {
    return res.status(err.statusCode).json(err.serializeErrors());
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(err.statusCode).json(err.serializeErrors());
  }

  res.status(500).json({
    errors: [{ message: 'Something went wrong...' }],
  });
}
