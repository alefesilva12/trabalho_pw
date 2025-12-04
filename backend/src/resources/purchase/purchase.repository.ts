import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const purchaseRepository = {
  create(data: {
    userId: number;
    total: number;
    items: { productId: number; quantity: number; price: number }[];
  }) {
    return prisma.purchase.create({
      data: {
        userId: data.userId,
        total: data.total,
        items: {
          create: data.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: { include: { product: true } },
        user: true,
      },
    });
  },

  listByUser(userId: number) {
    return prisma.purchase.findMany({
      where: { userId },
      include: {
        items: { include: { product: true } },
      },
    });
  },

  listAll() {
    return prisma.purchase.findMany({
      include: {
        items: { include: { product: true } },
        user: true,
      },
    });
  },

  findById(id: number) {
    return prisma.purchase.findUnique({
      where: { id },
      include: {
        items: { include: { product: true } },
        user: true,
      },
    });
  },
};
