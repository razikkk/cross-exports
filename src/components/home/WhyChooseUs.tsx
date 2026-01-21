import { CheckCircle, ClipboardCheck, MessageSquare, Package, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Package,
      title: "Export-Ready Processes",
      description: "Packing, documentation, and shipment coordination handled professionally",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Checks Before Dispatch",
      description: "Product inspection support and batch consistency focus",
    },
    {
      icon: MessageSquare,
      title: "B2B Communication",
      description: "Quick responses, clear timelines, and structured order updates",
    },
    {
      icon: CheckCircle,
      title: "Flexible Supply Options",
      description: "Standard packaging + bulk supply + private label availability (where applicable)",
    },
    {
      icon: Globe,
      title: "International Support",
      description: "Serving UK, Europe, and global destinations",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
            Why Partner With Us
          </span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            Why Choose Us
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We focus on what B2B buyers need most: consistency, clarity, and smooth execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="card-premium p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm font-sans">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
