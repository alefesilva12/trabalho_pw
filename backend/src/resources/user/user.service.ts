import bcrypt from "bcrypt";
import { CreateUserDTO } from "./user.types";
import { userRepository } from "./user.repository";

export const userService = {
  async register(data: CreateUserDTO) {
    const hashed = await bcrypt.hash(data.password, 10);

    return userRepository.create({
      ...data,
      password: hashed,
      userTypeId: 2 
    });
  },
};