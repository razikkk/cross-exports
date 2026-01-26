import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Globe, Award } from "lucide-react";

const AboutPreview = () => {
  const features = [
    {
      icon: Leaf,
      title: "B2B Supply You Can Rely On:",
      description: "Consistent production and export-ready packing for repeat orders",
    },
    {
      icon: Globe,
      title: "Quality & Documentation Support:",
      description: "COA, packing list, invoice, HS codes, and export documentation assistance.",
    },
    {
      icon: Award,
      title: "UK & EU Buyer Support:",
      description: "Local UK-side support to assist UK & European customers with quicker responses, smoother coordination, and reliable follow-ups.",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
              About Cross Exports
            </span>
            <h2 className="heading-section text-foreground mt-3 mb-6">
              From India's Heartland to the World
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-body text-muted-foreground mb-6">
              Cross Exports is an India-based exporter and supplier of premium coir products 
              and selected agro products. With years of experience in the domestic market, 
              we are now expanding into the UK and global markets.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              Our commitment to quality, sustainability, and customer satisfaction has made 
              us a trusted partner for businesses worldwide seeking authentic Indian products.
            </p>
            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-premium p-6 flex items-start gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-card text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
