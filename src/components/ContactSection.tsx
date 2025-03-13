
import BentoBox from "./BentoBox";
import ContactForm from "./ContactForm";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-medium text-primary/70 mb-2">LET'S COLLABORATE</span>
          <h2 className="section-heading">Let's Bring Ideas to Life!</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Whether you have a project in mind, need a creative partner, or just want to connect—let's make it happen.
          </p>
        </div>
      </div>

      <div className="bento-grid grid-cols-1 md:grid-cols-3 auto-rows-auto">
        <BentoBox 
          className="md:col-span-3"
          size="xl"
          animationDelay={100}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-secondary rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Email Me At</h4>
                      <a href="mailto:example@email.com" className="text-muted-foreground hover:text-primary transition-colors link-underline">
                        example@email.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Follow Me On</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 p-6 bg-secondary/50 rounded-xl">
                <p className="italic text-muted-foreground text-center">
                  "I'm excited to collaborate and create something extraordinary together!"
                </p>
              </div>
            </div>
          </div>
        </BentoBox>
      </div>
    </section>
  );
};

export default ContactSection;
