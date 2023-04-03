import { Request, Response } from "express";
import { createUserService } from "../../services/user/create";
import { IUserRequest } from "../../interfaces/user";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};
