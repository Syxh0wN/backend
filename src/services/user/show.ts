import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Users } from "../../entities/user";
import { IUserRequest } from "../../interfaces/user";

export const showUserService = async () => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.find();

  const plainNewUser = instanceToPlain(user) as IUserRequest;
  return plainNewUser;
};

export const getOneUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id });

  if (!user) throw new AppError("User not found", 404);

  const plainNewUser = instanceToPlain(user) as IUserRequest;
  return plainNewUser;
};
