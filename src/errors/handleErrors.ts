import { Request, Response, NextFunction } from "express";
import { AppError } from "./appError";

export const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  console.log(error.message);
  return res.status(500).json({ message: "internal server error" });
};
