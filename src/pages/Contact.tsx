import { useState, useRef } from "react"; // Added useRef
import emailjs from "@emailjs/browser"; // Added EmailJS
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); // Reference to the form
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_cucqe7k";
    const TEMPLATE_ID = "template_uloilbk";
    const PUBLIC_KEY = "xAPu3BVTzI96a3TiG";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // Mapped to your template variables:
          title: formData.subject,    // Matches {{title}} in subject field
          name: formData.name,       // Matches {{name}} in content
          from_name: formData.name,  // Matches {{from_name}} in content
          from_email: formData.email, // Matches {{from_email}} in content
          phone: formData.phone,      // Matches {{phone}} in content
          subject: formData.subject,  // Matches {{subject}} in content
          message: formData.message,  // Matches {{message}} in content
          to_email: "info@crossexports.com",
        },
        PUBLIC_KEY
      );

      toast({ 
        title: "Success!", 
        description: "Your inquiry has been sent to info@crossexports.com" 
      });
      
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ 
        variant: "destructive",
        title: "Error", 
        description: "Something went wrong. Please check your connection and try again." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        subtitle="Ready to discuss your requirements? We're here to help."
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* 1. India Office Card */}
            <div className="lg:col-span-3 bg-muted/30 p-5 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="text-primary w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground">India</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Address</p>
                    <p className="text-xs font-medium leading-relaxed">Mannur PO, Palakkad, 678642, Kerala, India</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Call Us</p>
                    <a href="tel:+919645324382" className="text-xs font-medium hover:text-primary transition-colors">+91 96453 24382</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:info@crossexports.com" className="text-xs font-medium hover:text-primary transition-colors break-all">info@crossexports.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. UK Office Card */}
            <div className="lg:col-span-3 bg-muted/30 p-5 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="text-secondary w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground">UK</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="text-secondary w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Address</p>
                    <p className="text-xs font-medium leading-relaxed">63, Monarch Way, Leighton Buzzard, LU7 1FW, UK</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-secondary w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Call Us</p>
                    <a href="tel:+447733644159" className="text-xs font-medium hover:text-secondary transition-colors">+44 7733 644159</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-secondary w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:sales@crossexports.com" className="text-xs font-medium hover:text-secondary transition-colors break-all">sales@crossexports.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Inquiry Form */}
            <div className="lg:col-span-6 card-premium p-8 shadow-md border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Inquiry Form</h3>
              <p className="text-sm text-muted-foreground mb-6">Send us your requirements and we will get back to you with a quote.</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+44 7700 000000"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Bulk Order Inquiry"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground ml-1">Your Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about the products and quantity you need..."
                    className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/10"
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;