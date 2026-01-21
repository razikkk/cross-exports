import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">

          {/* LEFT: Logo */}
          <Link
  to="/"
  className="flex items-center flex-shrink-0"
>
  <img
    src="/cross.png"
    alt="Company Logo"
    className="
      h-[250px] w-[250px]
      md:h-[320px] md:w-[320px]
      object-contain

      /* MOBILE position */
      -ml-4 -mt-6

      /* DESKTOP position */
      md:-mt-10 md:ml-0
    "
  />
</Link>




          {/* CENTER: Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT: CTA */}
          <div className="hidden md:flex flex-shrink-0">
            <Link to="/contact" className="btn-primary text-sm">
              Get Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border animate-fade-in">
            <ul className="flex flex-col py-4 text-center">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-3 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-primary bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li className="px-6 pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary text-sm w-full text-center inline-block"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
