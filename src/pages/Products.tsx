import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <Layout>
      <PageHeader
        label="Our Products"
        title="Export Product Categories"
        subtitle="We supply coir and agro products for UK, Europe, and international buyers. Our product range is structured for B2B ordering with clear specifications, scalable supply, and export documentation support."
      />

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-6">
              Need Custom Requirements?
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              We can accommodate specific product specifications, packaging requirements, 
              and custom order quantities. Let's discuss how we can meet your exact needs.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
