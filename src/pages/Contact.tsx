import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@crossexports.com",
      href: "mailto:info@crossexports.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 98765 43210",
      href: "https://wa.me/919876543210",
    },
    {
      icon: MapPin,
      label: "India Office",
      value: "Mannur PO, Palakkad, 678642, Kerala, India",
      href: null,
    },
    {
      icon: MapPin,
      label: "UK Office",
      value: "63, Monarch Way, Leighton Buzzard, LU7 1FW, United Kingdom",
      href: null,
    },
    
  ];

  return (
    <Layout>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        subtitle="Ready to discuss your requirements? We're here to help you source the best products."
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="heading-card text-foreground mb-4">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground font-sans">
                  Whether you need a quote, have questions about our products, or 
                  want to discuss a partnership, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-sans text-muted-foreground mb-1">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground font-sans font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-sans font-medium">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="card-premium p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 1:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-premium p-8">
                <h2 className="heading-section text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid sm:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-sans font-medium text-foreground mb-2">
        Full Name *
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="John Doe"
        className="w-full px-4 py-3 rounded-md border border-border bg-background"
      />
    </div>

    <div>
      <label className="block text-sm font-sans font-medium text-foreground mb-2">
        Email Address *
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="john@email.com"
        className="w-full px-4 py-3 rounded-md border border-border bg-background"
      />
    </div>
  </div>

  <div className="grid sm:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-sans font-medium text-foreground mb-2">
        Mobile Number *
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        placeholder="+91 98765 43210"
        className="w-full px-4 py-3 rounded-md border border-border bg-background"
      />
    </div>

    <div>
      <label className="block text-sm font-sans font-medium text-foreground mb-2">
        Subject *
      </label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        placeholder="Inquiry about products"
        className="w-full px-4 py-3 rounded-md border border-border bg-background"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-sans font-medium text-foreground mb-2">
      Message *
    </label>
    <textarea
      name="message"
      rows={5}
      value={formData.message}
      onChange={handleChange}
      required
      placeholder="Tell us about your requirements..."
      className="w-full px-4 py-3 rounded-md border border-border bg-background resize-none"
    />
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="btn-primary w-full sm:w-auto inline-flex items-center gap-2 disabled:opacity-70"
  >
    {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
  </button>
</form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
