import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user";
import { AppError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../interfaces/user";

export const createUserService = async (
  data: IUserRequest
): Promise<IUserRequest> => {
  const userRepository = AppDataSource.getRepository(Users);
  const { email } = data;
  const existingUser = await userRepository.findOne({ where: { email } });
  if (existingUser) throw new AppError("Email already exists!", 409);
  const newUser = userRepository.create(data);
  await userRepository.save(newUser);
  const plainNewUser = instanceToPlain(newUser) as IUserRequest;
  return plainNewUser;
};
