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
    const formattedErrs = err.errors.map((error) => {
      return {
        message: error.msg,
        field: error.param,
      };
    });
    return res.status(400).json({ errors: formattedErrs });
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(500).json({ errors: [{ message: err.reason }] });
  }

  res.status(500).json({
    message: 'Something went wrong....',
  });
}
