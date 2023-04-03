import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user";
import { AppError } from "../../errors/appError";

export const removeUserService = async (uuid: string) => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id: uuid });

  if (!user) throw new AppError("User not found", 404);

  if (uuid !== user.id)
    throw new AppError("You can only delete your own account", 403);

  await userRepository.delete(uuid);
};
