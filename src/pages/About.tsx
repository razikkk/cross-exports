import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Leaf, Users, TrendingUp, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatWeDo from "@/components/about/whatwedo";

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

  const faqs = [
    {
      question: "What countries do you export to?",
      answer: "We currently export to the UK, European Union countries, Middle East, and are expanding our reach to North America and Australia. We can accommodate shipping to most international destinations.",
    },
    {
      question: "What are your minimum order quantities?",
      answer: "Minimum order quantities vary by product. For coir products, we typically require a minimum of one 20ft container. For smaller quantities, we can discuss consolidation options. Please contact us for specific product MOQs.",
    },
    {
      question: "How do you ensure product quality?",
      answer: "We have a multi-stage quality control process including source verification, in-house testing for parameters like EC, pH, and moisture content, and pre-shipment inspection. All our products come with quality certificates.",
    },
    {
      question: "What certifications do your products have?",
      answer: "Our products meet international quality standards. We can provide phytosanitary certificates, quality analysis reports, and other documentation required for import into your country.",
    },
    {
      question: "What payment terms do you offer?",
      answer: "We offer flexible payment terms including Letter of Credit (LC), Telegraphic Transfer (TT), and other arrangements based on the relationship and order size. We're happy to discuss terms that work for both parties.",
    },
  ];

  return (
    <Layout>
      <PageHeader
        label="About Us"
        title="Our Story"
        subtitle="We are an India-based exporter serving UK, Europe, and international buyers with reliable coir and agro product supply."
      />

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-section text-foreground mb-6">
                From Local Roots to Global Reach
              </h2>
              <div className="divider-gold mb-6" />
              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                We built our strength in the domestic market by focusing on consistent quality, dependable delivery, 
                and long-term customer relationships.Now, we are expanding into exports to support UK,
                 European, and global B2B buyers who need a supplier they can trust.
                </p>
                <p>
                With a UK presence to support UK and European customers, we make international purchasing easier 
                through clear communication, faster coordination, and export-ready documentation support.

                </p>
               
              </div>
            </div>
            <div className="bg-muted rounded-lg aspect-[3/2] flex items-center justify-center ">
              <span className="text-muted-foreground font-sans"><img src="/about-cross.jpg" alt="" className="rounded-[20px]" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-premium p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-section text-foreground mb-4">Our Mission</h3>
              <p className="text-body text-muted-foreground">
              To deliver export-ready products with reliable supply, clear documentation, and 
              consistent service that helps our buyers grow their business confidently.

              </p>
            </div>

            {/* Vision */}
            <div className="card-premium p-8">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="heading-section text-foreground mb-4">Our Vision</h3>
              <p className="text-body text-muted-foreground">
              To become a trusted exporter for UK and international buyers by offering scalable supply, 
              transparent processes, and strong long-term partnerships.

              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDo/>


      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
              What We Stand For
            </span>
            <h2 className="heading-section text-foreground mt-3 mb-4">Our Values</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-card text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm font-sans">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
                Common Questions
              </span>
              <h2 className="heading-section text-foreground mt-3 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="divider-gold mx-auto" />
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="font-serif text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Ready to source premium coir and agro products? We're here to help you 
            find the right products for your business needs.
          </p>
          <Link
            to="/contact"
            className="bg-background text-foreground px-6 py-3 rounded-md font-sans font-medium transition-all duration-300 hover:bg-background/90 inline-flex items-center gap-2"
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
