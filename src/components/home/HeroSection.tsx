import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-coir.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Coir products and natural fibers"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "var(--hero-gradient)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-accent font-sans text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in">
          UK-Ready Export Partner for 
          </span>
          <h1 className="heading-display text-background mb-6 animate-slide-up">
          Coir & {" "}
            <span className="text-accent">Agro Products
</span>
          </h1>
          <p className="text-body text-background/80 mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
          We supply consistent, compliance-ready products with documentation support, quality checks, 
          and export coordination for smooth international deliveries.

          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline border-background/30 text-background hover:bg-background hover:text-foreground inline-flex items-center justify-center">
              Request Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "10+", label: "Years Experience" },
              { value: "15+", label: "Countries Served" },
              { value: "100%", label: "Organic Products" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-background/60 text-sm font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
