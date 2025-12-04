import { AppError } from "../../errors/AppError";
import { CreateProductDTO, UpdateProductDTO } from "./product.types";
import { productRepository } from "./product.repository";

export const productService = {
  async list() {
    return productRepository.findAll();
  },

  async getById(id: number) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    return product;
  },

  async create(data: CreateProductDTO) {
    const created = await productRepository.create(data);
    return created;
  },

  async update(id: number, data: UpdateProductDTO) {
    await productService.getById(id);
    const updated = await productRepository.update(id, data);
    return updated;
  },

  async remove(id: number) {
    await productService.getById(id);
    await productRepository.delete(id);
  },
};
