import BentoBox from "./BentoBox";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <section id="home" className="pt-32 pb-16">
      <div className="bento-grid grid-cols-1 md:grid-cols-4 auto-rows-auto">
        {/* Main profile box */}
        <BentoBox className="p-8 md:p-10" size="xl" colSpan={2} rowSpan={2} animationDelay={100}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="inline-block mb-2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                Designer • Developer • Photographer
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Anand Kumar Yalla
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Designing visuals. Developing solutions. Capturing stories.
              </p>
            </div>
            <div className="mt-auto">
              <button onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }} className="hover-scale bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-md">
                Let's Connect
              </button>
            </div>
          </div>
        </BentoBox>

        {/* Profile photo */}
        <BentoBox size="md" colSpan={1} rowSpan={1} animationDelay={200} className="overflow-hidden p-0">
          <div className="h-full w-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[url('https://placehold.co/400x400/e2e8f0/1e293b?text=Profile+Photo')] bg-cover bg-center" />
            </div>
          </div>
        </BentoBox>

        {/* Right tall box */}
        <BentoBox size="lg" colSpan={1} rowSpan={2} animationDelay={300} className="bg-gradient-to-br from-secondary/50 to-accent/50 p-6">
          <h3 className="text-xl font-medium mb-4">Creative Portfolio</h3>
          <p className="text-muted-foreground mb-4">
            Blending design aesthetics with technical expertise to create meaningful digital experiences
          </p>
          <div className="grid grid-cols-2 gap-2 mt-auto py-0">
            <div className="bg-white/30 h-16 rounded-lg"></div>
            <div className="bg-white/30 h-16 rounded-lg"></div>
            <div className="bg-white/30 h-16 rounded-lg"></div>
            <div className="bg-white/30 h-16 rounded-lg"></div>
          </div>
        </BentoBox>

        {/* Additional small boxes in bottom row */}
        <BentoBox size="sm" animationDelay={400} className="bg-gradient-to-r from-primary/5 to-primary/10 group">
          <div className="flex flex-col h-full justify-center items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-primary">✍️</span>
            </div>
            <p className="text-sm font-medium">Design</p>
          </div>
        </BentoBox>

        <BentoBox size="sm" animationDelay={500} className="bg-gradient-to-r from-primary/5 to-primary/10 group">
          <div className="flex flex-col h-full justify-center items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-primary">🖥️</span>
            </div>
            <p className="text-sm font-medium">Development</p>
          </div>
        </BentoBox>

        {/* Center tall box */}
        <BentoBox size="lg" colSpan={1} rowSpan={2} animationDelay={600} className="p-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-background/30"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-between py-[24px] my-0 px-[22px]">
            <div>
              <h3 className="text-xl font-medium mb-2">Skills</h3>
              <p className="text-sm text-muted-foreground">Figma, Penpot, Affinity tools, Kdenkive, Java, Frontend development, Salesforce</p>
            </div>
            {/*             <div className="space-y-3">
              {["UI/UX Design", "Web Development", "Photography", "Videography", "Data Visualization"].map((skill, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2" 
                      style={{ width: `${80 - i * 10}%`, transition: "width 1s ease-in-out" }} 
                    />
                  </div>
                </div>
              ))}
             </div> */}
          </div>
        </BentoBox>

        <BentoBox size="sm" animationDelay={700} className="bg-gradient-to-r from-primary/5 to-primary/10 group">
          <div className="flex flex-col h-full justify-center items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-primary">📸</span>
            </div>
            <p className="text-sm font-medium">Photography</p>
          </div>
        </BentoBox>
      </div>
    </section>;
};
export default HeroSection;