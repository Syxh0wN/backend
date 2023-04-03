import { Request, Response } from "express";
import { iContactCreate, iToken } from "../../interfaces/contact";
import { updateContactService } from "../../services/contact/update";
import { validate as isValidUuid } from "uuid";

export const updateContactController = async (req: Request, res: Response) => {
  const data: iContactCreate = req.body;
  const token: iToken = req.token;
  const { id: id } = req.params;

  if (isValidUuid(id) === false)
    return res.status(400).json({ message: "UUID is not valid" });

  const resData = await updateContactService(id, data, token);
  return res.status(200).json(resData);
};
