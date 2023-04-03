import { Request, Response } from "express";
import { iContactCreate } from "../../interfaces/contact";
import { addContactService } from "../../services/contact/create";

export const addContactController = async (req: Request, res: Response) => {
  const token = req.token;
  const data: iContactCreate = req.body;
  const resData = await addContactService(data, token);
  return res.status(201).json(resData);
};
