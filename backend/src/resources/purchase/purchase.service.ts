import { purchaseRepository } from "./purchase.repository";

export const purchaseService = {
  async createPurchase(
    userId: number,
    items: { productId: number; quantity: number; price: number }[]
  ) {
    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    return purchaseRepository.create({
      userId,
      total,
      items,
    });
  },

  listUserPurchases(userId: number) {
    return purchaseRepository.listByUser(userId);
  },

  listAllPurchases() {
    return purchaseRepository.listAll();
  },

  findById(id: number) {
    return purchaseRepository.findById(id);
  },
};