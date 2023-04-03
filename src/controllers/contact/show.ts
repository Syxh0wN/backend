import { Request, Response } from "express";
import { iContactCreate, iToken } from "../../interfaces/contact";
import { listmyContactsUserService } from "../../services/contact/show";

export const listmyContactsUserController = async (
  req: Request,
  res: Response
) => {
  const token: iToken = req.token;
  const resData = await listmyContactsUserService(token);
  return res.status(200).json(resData);
};
