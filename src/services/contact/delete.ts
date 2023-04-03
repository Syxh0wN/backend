import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact";
import { AppError } from "../../errors/appError";
import { iToken } from "../../interfaces/contact";

export const removeContactService = async (
  idContact: string,
  { id }: iToken
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const hasContact = await contactRepository.findOne({
    where: { id: idContact, user: { id } },
    relations: { user: true },
  });

  if (!hasContact) throw new AppError("Contact not found", 404);

  if (hasContact && hasContact.user.id !== id)
    throw new AppError("You don't have permission to delete this contact");

  await contactRepository.delete(idContact);
  return {
    message: "Contact deleted successfully",
  };
};
