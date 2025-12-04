import bcrypt from "bcrypt";
import { prisma } from "../prisma/client";

export const userService = {
  findAll: () => prisma.user.findMany(),

  findById: (id: number) =>
    prisma.user.findUnique({
      where: { id },
    }),

  create: async (data: { name: string; email: string; password: string }) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  },

  delete: (id: number) =>
    prisma.user.delete({
      where: { id },
    }),
};
