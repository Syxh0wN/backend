import { Request, Response } from "express";
import { updateUserService } from "../../services/user/update";
import { validate as isValidUuid } from "uuid";
import { IUserRequest } from "../../interfaces/user";

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const user: IUserRequest = req.body;
  const id: string = req.params.id;
  if (isValidUuid(id) === false)
    return res.status(400).json({ message: "UUID is not valid" });

  const response = await updateUserService(id, user);
  return res.status(200).json(response);
};
