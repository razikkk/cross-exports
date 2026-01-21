import { useState } from "react";
import { Product } from "@/data/products";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="card-premium overflow-hidden cursor-pointer group animate-slide-up"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm font-sans line-clamp-2">
            {product.shortDescription}
          </p>
          <span className="inline-block mt-4 text-primary text-sm font-sans font-medium">
            Learn More →
          </span>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
