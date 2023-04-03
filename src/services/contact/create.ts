import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user";
import { AppError } from "../../errors/appError";
import { iContactCreate, iToken } from "../../interfaces/contact";
import { Contact } from "../../entities/contact";

export const addContactService = async (
  data: iContactCreate,
  token: iToken
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id: token.id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const hasContactEmail = await contactRepository.findOne({
    where: { email: data.email, user: { id: token.id } },
    relations: { user: true },
  });

  if (hasContactEmail) {
    throw new AppError("Exist a contact with this email");
  }

  const exists = await contactRepository.findOne({
    where: { phone: data.phone, user: { id: token.id } },
    relations: { user: true },
  });

  if (exists) {
    throw new AppError("Exist a contact with this phone");
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  const plainNewCtt = instanceToPlain(contact) as iContactCreate;
  return plainNewCtt;
};
