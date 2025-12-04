import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 fade-in">
      {products.map((p: any) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}
