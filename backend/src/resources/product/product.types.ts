export interface ProductDTO {
  id?: number;
  name: string;
  price: number;
  description?: string | null;
  createdAt?: Date;
}

export interface CreateProductDTO {
  name: string;
  price: number;
  description?: string | null;
}

export interface UpdateProductDTO {
  name?: string;
  price?: number;
  description?: string | null;
}
