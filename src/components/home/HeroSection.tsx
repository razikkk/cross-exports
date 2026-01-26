import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import your images
import heroCoir from "@/assets/hero-coir.jpg";
import heroAgro from "@/assets/product-spices.jpg";
import heroLogistics from "@/assets/product-coco-peat.jpg";

const slides = [
  {
    image: heroCoir,
    title: "Coir &",
    highlight: "Agro Products",
    description: "We supply consistent, compliance-ready products with documentation support and export coordination for smooth international deliveries."
  },
 
  {
    image: heroLogistics,
    title: "Global",
    highlight: "Supply Chain",
    description: "Bulk supply | Export-ready packaging | Global buyer support | UK presence available"
  },
  {
    image: heroAgro,
    title: "Premium",
    highlight: "Indian Spices",
    description: "Sourcing authentic, high-grade spices directly from traditional farms with strict quality control for global markets."
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Carousel - Left to Right Slide Effect */}
      <div className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full h-full">
            <img
              src={slide.image}
              alt={slide.highlight}
              className="w-full h-full object-cover"
            />
            {/* Hero Gradient Overlay */}
            <div 
              className="absolute inset-0" 
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)" }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div key={currentSlide} className="animate-slide-up">
            <h1 className="heading-display text-background text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              {slides[currentSlide].title}{" "}
              <span className="text-accent">{slides[currentSlide].highlight}</span>
            </h1>

            <p className="text-body text-background/80 mb-8 max-w-xl">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline border-background/30 text-background hover:bg-background hover:text-foreground inline-flex items-center justify-center px-8 py-3 rounded-md transition-all">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Carousel Indicators - Moved to bottom right to avoid button overlap */}
          {/* <div className="absolute -bottom-16 right-0 flex gap-3 sm:right-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  idx === currentSlide ? "w-12 bg-accent" : "w-6 bg-background/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;