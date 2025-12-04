import { PrismaClient } from "@prisma/client";
import { CreateUserDTO } from "./user.types";

const prisma = new PrismaClient();

export const userRepository = {
  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: { userType: true },
    });
  },

  create(data: CreateUserDTO & { userTypeId: number }) {
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        userTypeId: data.userTypeId,
      },
      include: { userType: true },
    });
  },
};
