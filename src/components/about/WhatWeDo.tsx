import { Leaf, Bean, Package } from "lucide-react";

const WhatWeDo = () => {
  const categories = [
    {
      icon: Leaf,
      title: "Coir Products",
      items: ["Coco peat / Coir pith", "Grow bags", "Coir fibre"],
    },
    {
      icon: Bean,
      title: "Pulses & Spices",
      items: ["Urad Dal available now", "More options on enquiry"],
    },
    {
      icon: Package,
      title: "Other Agro Products",
      items: ["Sourced based on buyer requirements"],
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
            Our Offerings
          </span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            What We Do
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We supply and export product categories that B2B buyers source regularly, including:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="card-premium p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm font-sans flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
