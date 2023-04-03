import { Request, Response } from "express";
import { validate as isValidUuid } from "uuid";
import { iToken } from "../../interfaces/contact";
import { removeContactService } from "../../services/contact/delete";

export const removeContactController = async (req: Request, res: Response) => {
  const token: iToken = req.token;
  const { id: id } = req.params;

  if (isValidUuid(id) === false)
    return res.status(400).json({ message: "UUID is not valid" });

  const resData = await removeContactService(id, token);
  return res.status(200).json(resData);
};
