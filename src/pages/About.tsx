import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Leaf, Users, TrendingUp, Shield, Globe, CheckCircle } from "lucide-react";
import WhatWeDo from "@/components/about/WhatWeDo";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Quality First",
      description: "Every shipment is handled with a focus on product consistency and export readiness.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "We support repeat orders through stable sourcing and dependable coordination.",
    },
    {
      icon: Users,
      title: "Clear Communication",
      description: "Fast responses, structured updates, and buyer-friendly documentation support.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Partnership",
      description: "We work like a supply partner, not a one-time seller.",
    },
  ];

  return (
    <Layout>
      <PageHeader
        label="About Us"
        title="Our Story"
        subtitle="We are an India-based exporter serving UK, Europe, and international buyers with reliable coir and agro product supply."
      />

      {/* Company Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Main Grid: items-start is key for the sticky effect */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Your Exact Text */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-section text-foreground mb-6">
                  From Local Roots to Global Reach
                </h2>
                <div className="divider-gold mb-8" />
                
                {/* Your first paragraph as a Lead Paragraph */}
                <p className="text-xl text-foreground font-medium leading-relaxed font-serif">
                  Cross Exports is an India-based export company serving UK, European, and international B2B buyers with reliable product supply and export-ready coordination. We work with importers, wholesalers, distributors, garden and horticulture businesses, and commercial buyers who require consistent quality, clear documentation, and dependable delivery planning.
                </p>
              </div>

              <div className="space-y-6 text-body text-muted-foreground leading-relaxed font-sans">
                <p>
                  Our journey began in India’s domestic market, where expectations around reliability, product consistency, and service standards are high. Through this experience, we developed a strong understanding of what buyers value most—stable supply, transparent communication, and the ability to deliver the same standard order after order. As we expand internationally, we bring that same disciplined approach to export trade, supporting global customers with structured processes and buyer-friendly service.
                </p>
                
                <p>
                  At Cross Exports, we focus on product categories that are widely used in global markets and frequently sourced by professional buyers. Our core export offering includes coir products such as coco peat/coir pith (5kg blocks and 650gm briquettes), coir grow bags, and coir fibre. These products are in demand across horticulture and growing media industries, including garden centres, nurseries, hydroponics businesses, professional growers, and distribution partners who supply to regional markets.
                </p>

                <p>
                  We also support a future-ready range of pulses and spices, designed for ethnic grocery wholesalers, food distribution businesses, and international buyers looking to source from India. Urad Dal is currently available, and additional pulses and spice products can be supported based on buyer requirements and enquiry. Alongside these categories, we also maintain flexibility to source and export other agro commodities to meet evolving market demand.
                </p>

                {/* Highlighted section for the UK Support paragraph */}
                <div className="bg-muted/40 p-6 rounded-xl border-l-4 border-accent">
                  <p className="text-foreground font-medium">
                    A major advantage we provide is our UK presence/support, which helps UK and European customers coordinate orders more efficiently. We understand that international sourcing is not only about pricing and product—it is also about time zones, response time, clarity of communication, and confidence in the supplier relationship. By supporting buyers through UK and Europe coordination, we aim to make ordering smoother, improve buyer experience, and help customers manage their supply chain with greater confidence.
                  </p>
                </div>

                <p>
                  Cross Exports is positioned to serve as a dependable sourcing partner for businesses that need a consistent exporter who values quality, reliability, and professional communication. Whether you are a horticulture distributor sourcing coco peat for the UK market, a wholesaler supplying growing media to Europe, or a trade buyer looking for agro commodity supply, our team is ready to support your requirement with a buyer-first approach and long-term reliability.
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Image Container */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="relative group">
                {/* Vertical Image */}
                <div className="bg-muted rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-border/50">
                  <img 
                    src="/about-cross.jpg" 
                    alt="Cross Exports Production and Logistics" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Badge for UK/EU Advantage */}
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-xl text-primary-foreground hidden md:block border-4 border-background">
                  <div className="flex items-center gap-4">
                    <Globe className="w-10 h-10 opacity-90" />
                    <div>
                      <span className="block text-xl font-bold">UK & Europe</span>
                      <span className="text-xs uppercase tracking-widest opacity-80">Local Coordination</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Features List */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {[
                  "Stable Supply",
                  "Consistent Quality",
                  "Clear Documentation",
                  "Expert Logistics"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle className="text-accent w-4 h-4 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-premium p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-section text-foreground mb-4 font-serif">Our Mission</h3>
              <p className="text-body text-muted-foreground">
                To deliver export-ready products with reliable supply, clear documentation, and 
                consistent service that helps our buyers grow their business confidently.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="heading-section text-foreground mb-4 font-serif">Our Vision</h3>
              <p className="text-body text-muted-foreground">
                To become a trusted exporter for UK and international buyers by offering scalable supply, 
                transparent processes, and strong long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDo />

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
              Professional Standards
            </span>
            <h2 className="heading-section text-foreground mt-3 mb-4 font-serif">Our Values</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm font-sans">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-section text-primary-foreground mb-6 font-serif">
            Let's Work Together
          </h2>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-sans">
            Ready to source premium coir and agro products? We're here to help you 
            find the right products for your business needs with structured coordination.
          </p>
          <Link
            to="/contact"
            className="bg-background text-foreground px-8 py-4 rounded-md font-sans font-bold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;