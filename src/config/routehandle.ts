import { NextFunction, Request, Response } from "express";
import { logger } from "./logger";

export function NotFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error = new Error(`${req.originalUrl} couldn't be found`);
  error["status"] = 404;
  next(error); // pass error to errorhandler mw
}

export function GlobalErrorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // we use the error  passed by not found
  logger.error(error);
  res.status(error["status"] || 500); // pass the error status or 500 for internal server errors
  res.json({
    error: { message: error.message },
  });
}
