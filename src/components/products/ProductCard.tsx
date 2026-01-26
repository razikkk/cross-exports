import { useState } from "react";
import { Product } from "@/data/products";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use the first image from the array as the thumbnail
  const displayImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : "/placeholder.jpg"; // Optional: Add a placeholder path

  return (
    <>
      <div
        className="card-premium overflow-hidden cursor-pointer group animate-slide-up"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image - Now using displayImage (the first index of the array) */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={displayImage}
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
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-primary text-sm font-sans font-medium">
              View Details →
            </span>
            {/* Optional: Show how many views/images are available */}
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest bg-muted px-2 py-1 rounded">
              {product.images.length} Photos
            </span>
          </div>
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