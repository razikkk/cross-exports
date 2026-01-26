import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Facebook, Instagram, X } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="relative flex flex-col items-start">
  {/* Link and Logo Container */}
  <Link 
    to="/" 
    className="relative z-20 inline-block -mt-24 -mb-12 transition-transform hover:scale-105"
  >
    <span className="font-serif">
      <img 
        src="cross.png" 
        alt="Cross Exports Logo" 
        className="h-50 w-auto object-contain" 
      />
    </span>
  </Link>

  {/* Text Content */}
  <div className="relative z-10 pl-4"> 
    <p className="text-background/70 font-sans text-sm leading-relaxed max-w-[250px]">
      India-based exporter of premium coir products and selected agro products. 
      Delivering quality from India to the world.
    </p>
  </div>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors text-sm font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Our Products</h4>
            <ul className="space-y-3">
              {[
                "Coco Peat",
                "Coir Fibre",
                "Coir Grow Bags",
                "Spices",
                "Urad Dal",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-background/70 hover:text-accent transition-colors text-sm font-sans"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
         {/* Contact */}
<div>
  <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
  <ul className="space-y-6">
    {/* Address Section */}
    {/* <li className="flex items-start gap-3">
      <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
      <div className="text-background/70 text-sm font-sans space-y-3">
        <div>
          <span className="block font-medium text-background">India Office</span>
          <span>Mannur PO, Palakkad, 678642, Kerala, India</span>
        </div>
        <div>
          <span className="block font-medium text-background">UK Office</span>
          <span>63, Monarch Way, Leighton Buzzard, LU7 1FW</span>
        </div>
      </div>
    </li> */}

    {/* Phone Section */}
    <li className="flex items-start gap-3">
      <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
      <div className="text-background/70 text-sm font-sans space-y-2">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-background/40 font-bold">India</span>
          <a href="tel:+919645324382" className="hover:text-accent transition-colors">+91 9645324382</a>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-background/40 font-bold">United Kingdom</span>
          <a href="tel:+447733644159" className="hover:text-accent transition-colors">+44 7733644159</a>
        </div>
      </div>
    </li>

    {/* Email Section */}
    <li className="flex items-start gap-3">
      <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
      <div className="text-background/70 text-sm font-sans space-y-2">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-background/40 font-bold">United Kingdom</span>
          <a href="mailto:info@crossexports.com" className="hover:text-accent transition-colors">info@crossexports.com</a>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-background/40 font-bold">UK Sales</span>
          <a href="mailto:sales@crossexports.com" className="hover:text-accent transition-colors">sales@crossexports.com</a>
        </div>
      </div>
    </li>
  </ul>

  {/* Social Links */}
  <div className="mt-8 flex items-center gap-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-accent hover:border-accent transition-all">
      <Facebook size={16} />
    </a>
    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-accent hover:border-accent transition-all">
      <X size={16} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-accent hover:border-accent transition-all">
      <Instagram size={16} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-accent hover:border-accent transition-all">
      <Linkedin size={16} />
    </a>
  </div>
</div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm font-sans">
              © {currentYear} Cross Exports. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-background/50 hover:text-accent transition-colors text-sm font-sans"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/50 hover:text-accent transition-colors text-sm font-sans"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
