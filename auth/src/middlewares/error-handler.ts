import { Request, NextFunction, Response } from 'express';
import { CustomError } from '../errors/custom-error';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(500).json({
    errors: [{ message: 'Something went wrong...' }],
  });
}
