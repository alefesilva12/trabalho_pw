export interface PurchaseItemInputDTO {
  productId: number;
  quantity: number;
}

export interface CreatePurchaseDTO {
  items: PurchaseItemInputDTO[];
}

export interface PurchaseResponseDTO {
  id: number;
  userId: number;
  total: number;
  createdAt: Date;
}
