import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/user";

export const updateUserService = async (uuid: string, user: IUserRequest) => {
  const userRepo = AppDataSource.getRepository(Users);
  const userExist = await userRepo.exist({ where: { id: uuid } });

  if (!userExist) {
    throw new AppError("Id does not exist", 404);
  }

  await userRepo.update(uuid, user);
  const userData = await userRepo.find({ where: { id: uuid } });
  return userData;
};
