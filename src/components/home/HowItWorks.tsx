import { MessageCircle, FileText, Package, CheckSquare, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Inquiry",
      description: "Share product, quantity, and destination",
    },
    {
      icon: FileText,
      step: "02",
      title: "Quotation",
      description: "Receive pricing, lead time, and shipment terms",
    },
    {
      icon: Package,
      step: "03",
      title: "Samples",
      description: "Sample support for verification and approvals",
    },
    {
      icon: CheckSquare,
      step: "04",
      title: "Confirmation",
      description: "Final specs, packaging, and documents confirmed",
    },
    {
      icon: Truck,
      step: "05",
      title: "Shipment",
      description: "Dispatch with export documentation and tracking updates",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            How Ordering Works
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            A clear process designed for wholesale and importer requirements.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
<div className="bg-background rounded-xl p-6 shadow-sm border border-border h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-primary font-serif text-2xl font-bold">
                    {step.step}
                  </span>
                  <h3 className="heading-card text-foreground mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans">
                    {step.description}
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

export default HowItWorks;
