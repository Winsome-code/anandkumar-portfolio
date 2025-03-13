
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-background to-secondary/30 min-h-screen">
      <Navbar />
      
      <main className="container">
        <HeroSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Anand Kumar Yalla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
