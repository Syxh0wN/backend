import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";
import { iToken } from "../../interfaces/contact";

export const listmyContactsUserService = async ({ id }: iToken) => {
  const rep_contacts = AppDataSource.getRepository(Contact);

  const contacts = await rep_contacts.find({
    where: { user: { id } },
    relations: { user: true },
  });

  return contacts;
};
