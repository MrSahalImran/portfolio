import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/Sahal_imran_resume.pdf" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Check if we're at the top
        if (currentScrollY < 10) {
          setIsScrolled(false);
          setIsVisible(true);
        } else {
          setIsScrolled(true);
          // Show navbar when scrolling up, hide when scrolling down
          if (currentScrollY < lastScrollY) {
            setIsVisible(true); // Scrolling up
          } else {
            setIsVisible(false); // Scrolling down
          }
        }

        setLastScrollY(currentScrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-2 bg-background/70 backdrop-blur-lg shadow-lg border-b border-border/10"
          : "py-5 bg-transparent",
        // Desktop behavior: hide/show based on scroll direction
        "lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto", // Always visible on mobile
        isVisible
          ? "lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto"
          : "lg:-translate-y-full lg:opacity-0 lg:pointer-events-none"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> SahalImran </span>{" "}
            Portfolio
          </span>
        </a>

        {/* right-side controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* desktop nav */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* theme toggle (always visible, all viewports) */}
          <ThemeToggle />

          {/* mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden p-3 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed top-0 inset-x-0 h-screen bg-background/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-4 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 px-6 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
