import { PrismaClient } from "@prisma/client";
import { CreateProductDTO, UpdateProductDTO } from "./product.types";

const prisma = new PrismaClient();

export const productRepository = {
  findAll() {
    return prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  findById(id: number) {
    return prisma.product.findUnique({ where: { id } });
  },

  create(data: CreateProductDTO) {
    return prisma.product.create({ data });
  },

  update(id: number, data: UpdateProductDTO) {
    return prisma.product.update({
      where: { id },
      data,
    });
  },

  delete(id: number) {
    return prisma.product.delete({ where: { id } });
  },
};
