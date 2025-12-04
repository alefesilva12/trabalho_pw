import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const userRepository = {
  findByEmail: async (email: string) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },
};
