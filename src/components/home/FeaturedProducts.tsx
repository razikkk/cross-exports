import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
            Our Products
          </span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            Premium Export Quality
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Discover our range of carefully sourced and processed coir and agro products, 
            meeting international quality standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/products"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
