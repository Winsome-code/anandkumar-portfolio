
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "home", label: "HOME" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "work", label: "WORK" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar styling
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      })).filter(section => section.element !== null);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex space-x-2 bg-secondary/80 backdrop-blur-sm rounded-full px-3 py-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary-foreground/5"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
