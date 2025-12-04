import bcrypt from "bcrypt";
import { AppError } from "../../errors/AppError";
import { userRepository } from "../user/user.repository";

export const authService = {
  async login(email: string, password: string) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      throw new AppError("Invalid credentials", 401);
    }

    return user;
  },
};
