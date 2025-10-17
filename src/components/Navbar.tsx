import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">MS</div>
        
        <div className="gradient-text hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("education")} className="text-foreground/80 hover:text-foreground transition-colors">
            Education
          </button>
          <button onClick={() => scrollToSection("experience")} className="text-foreground/80 hover:text-foreground transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-foreground/80 hover:text-foreground transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4">
  <ThemeToggle />
  <Button
    onClick={() => scrollToSection("contact")}
    className="gradient-btn rounded-full px-6"
  >
    Hire Me
  </Button>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
