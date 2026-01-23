import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Source Premium Products?
          </h2>
          <p className="text-body text-primary-foreground/80 mb-8">
            Partner with Cross Exports for reliable, high-quality coir and agro products. 
            Let's discuss your requirements and explore how we can serve your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-background text-foreground px-6 py-3 rounded-md font-sans font-medium transition-all duration-300 hover:bg-background/90 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
            {/* <a
              href="tel:+919876543210"
              className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-md font-sans font-medium transition-all duration-300 hover:bg-primary-foreground/10 inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Us Now
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
