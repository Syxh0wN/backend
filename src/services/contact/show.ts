import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";
import { iContactCreate, iToken } from "../../interfaces/contact";

export const listmyContactsUserService = async ({ id }: iToken) => {
  const rep_contacts = AppDataSource.getRepository(Contact);

  const contacts = await rep_contacts.find({
    where: { user: { id } },
    relations: { user: true },
  });

  const plainNewUser = instanceToPlain(contacts) as iContactCreate;
  return plainNewUser;
};
