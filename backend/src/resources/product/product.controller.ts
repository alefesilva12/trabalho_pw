import { Request, Response } from "express";
import { productService } from "./product.service";

export const productController = {
  async list(req: Request, res: Response) {
    const products = await productService.list();
    return res.json(products);
  },

  async get(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await productService.getById(id);
    return res.json(product);
  },

  async create(req: Request, res: Response) {
    const product = await productService.create(req.body);
    return res.status(201).json(product);
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await productService.update(id, req.body);
    return res.json(product);
  },

  async remove(req: Request, res: Response) {
    const id = Number(req.params.id);
    await productService.remove(id);
    return res.status(204).send();
  },
};
