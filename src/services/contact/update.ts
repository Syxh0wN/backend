import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";
import { AppError } from "../../errors/appError";
import { iContactCreate, iToken } from "../../interfaces/contact";

export const updateContactService = async (
  id: string,
  data: iContactCreate,
  token: iToken
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const existingContact = await contactRepository.findOne({
    where: { id, user: { id: token.id } },
    relations: { user: true },
  });

  if (!existingContact) throw new AppError("Contact not found", 404);

  if (existingContact && existingContact.user.id !== token.id)
    throw new AppError("You don't have permission to update this contact");

  if (data?.email) {
    const contactEmail = await contactRepository.findOne({
      where: { email: data.email },
      relations: { user: true },
    });

    if (
      contactEmail &&
      contactEmail.user.id === token.id &&
      contactEmail.id !== id
    ) {
      throw new AppError("Email already registered");
    }
  }

  if (data?.phone) {
    const contactPhone = await contactRepository.findOne({
      where: { phone: data.phone },
      relations: { user: true },
    });

    if (
      contactPhone &&
      contactPhone.user.id === token.id &&
      contactPhone.id !== id
    ) {
      throw new AppError("Phone number already registered");
    }
  }

  await contactRepository.update(id, data);

  const contact = await contactRepository.findOneBy({ id: id });

  const plainContact = instanceToPlain(contact);
  return plainContact;
};
