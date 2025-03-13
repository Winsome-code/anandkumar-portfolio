
import BentoBox from "./BentoBox";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-medium text-primary/70 mb-2">MY PROFESSIONAL JOURNEY</span>
          <h2 className="section-heading">A Journey of Innovation & Creativity</h2>
        </div>
      </div>

      <div className="bento-grid grid-cols-1 md:grid-cols-3 auto-rows-auto">
        <BentoBox
          className="md:col-span-3 bg-gradient-to-r from-secondary/50 to-background p-8"
          size="xl"
          animationDelay={100}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/20 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-4">As an Employee</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium">IT Administrator</h4>
                <p className="text-muted-foreground mb-3">Managed and supported IT systems to ensure seamless operations.</p>
                <p className="font-medium mb-2">Specialized in:</p>
                <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-1">
                  <li>Workflow Automation: Streamlined processes using advanced Excel functions, Power Query, and Google Apps Script.</li>
                  <li>Data Management & CRM: Enhanced productivity and data accuracy with Salesforce integration.</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium">Graphic Designer</h4>
                <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-2">
                  <li>Designed impactful visual content for social media, reports, flyers, and banners using tools like Canva, Figma, and Penpot.</li>
                  <li>Built custom layouts for the organization's website using Wix.</li>
                  <li>Created dynamic dashboards in Excel and Google Sheets for better decision-making and data visualization.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium">Photographer & Videographer</h4>
                <p className="text-muted-foreground mb-3">Captured compelling photographs and videos showcasing success stories from rural areas.</p>
                <p className="font-medium mb-2">Delivered end-to-end video production, including:</p>
                <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-1">
                  <li>Screenwriting & Storyboarding: Creating engaging scripts for storytelling.</li>
                  <li>Direction of Photography (DOP): Shooting interviews and events.</li>
                  <li>Editing & Sound Design: Enhancing the narrative with seamless post-production.</li>
                </ul>
              </div>
            </div>
            
            <div className="w-px bg-border hidden md:block"></div>
            
            <div className="flex-1 relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary/20 rounded-full md:hidden"></div>
              <h3 className="text-xl font-semibold mb-4">Freelancing Projects</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium">Creative Design</h4>
                <p className="text-muted-foreground">Worked on various design projects, creating unique templates, branding materials, and digital assets for diverse clients.</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium">Photography</h4>
                <p className="text-muted-foreground">Captured professional-grade photographs for events, campaigns, and portfolio projects, tailoring visuals to client needs.</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium">Web Development</h4>
                <p className="text-muted-foreground">Developed and customized websites, ensuring a seamless user experience with a creative edge.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-xl mt-8 italic text-center">
                <p className="text-muted-foreground">"With every project, I strive to blend creativity and functionality, crafting impactful solutions that resonate."</p>
              </div>
            </div>
          </div>
        </BentoBox>
      </div>
    </section>
  );
};

export default ExperienceSection;
