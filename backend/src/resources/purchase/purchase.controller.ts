import { Request, Response } from "express";
import { purchaseService } from "./purchase.service";

export const purchaseController = {
  async create(req: Request, res: Response) {
    const userId = req.session.userId!;
    const { items } = req.body;

    const purchase = await purchaseService.createPurchase(userId, items);

    return res.status(201).json(purchase);
  },

  async listUser(req: Request, res: Response) {
    const userId = req.session.userId!;
    const purchases = await purchaseService.listUserPurchases(userId);

    return res.json(purchases);
  },

  async listAll(req: Request, res: Response) {
    const purchases = await purchaseService.listAllPurchases();
    return res.json(purchases);
  },

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const purchase = await purchaseService.findById(id);

    return res.json(purchase);
  },
};