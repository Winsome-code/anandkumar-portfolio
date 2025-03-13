
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

        {/* Profile photo - square box with 3D character head image */}
        <BentoBox size="md" colSpan={1} rowSpan={1} animationDelay={200} className="overflow-hidden p-0 aspect-square">
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative w-full h-full group transition-transform duration-300 hover:scale-105">
              <div 
                className="absolute inset-0 bg-[url('https://unsplash.com/photos/VtZdkY6NmRg')] bg-cover bg-center transform transition-transform duration-300 group-hover:rotate-3" 
              />
            </div>
          </div>
        </BentoBox>

        {/* Right tall box - height matches combined height of profile photo + two skill boxes */}
        <BentoBox 
          size="md" 
          colSpan={1} 
          rowSpan={3} 
          animationDelay={300} 
          className="p-6"
          style={{ background: "linear-gradient(270deg, rgba(55,203,159,1) 0%, rgba(18,156,145,1) 100%)" }}
        >
          <h3 className="text-xl font-medium mb-4 text-white">Creative Portfolio</h3>
          <p className="text-white/80 mb-4">
            Blending design aesthetics with technical expertise to create meaningful digital experiences
          </p>
          <div className="grid grid-cols-2 gap-2 mt-auto py-0">
            <div className="bg-white/30 h-10 rounded-lg"></div>
            <div className="bg-white/30 h-10 rounded-lg"></div>
          </div>
        </BentoBox>

        {/* Skills box - square */}
        <BentoBox 
          size="md" 
          colSpan={1} 
          rowSpan={1} 
          animationDelay={600} 
          className="p-0 overflow-hidden relative aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-background/30"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-between py-[24px] my-0 px-[22px]">
            <div>
              <h3 className="text-xl font-medium mb-2">Skills</h3>
              <p className="text-sm text-muted-foreground">Figma, Penpot, Affinity tools, Kdenkive, Java, Frontend development, Salesforce</p>
            </div>
          </div>
        </BentoBox>

        {/* Design box with design image */}
        <BentoBox 
          size="sm" 
          animationDelay={400} 
          className="p-0 overflow-hidden group aspect-square relative"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5')] bg-cover bg-center opacity-80"></div>
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col h-full justify-center items-center">
            <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-primary">✍️</span>
            </div>
            <p className="text-sm font-medium text-white drop-shadow-md">Design</p>
          </div>
        </BentoBox>

        {/* Development box with code image */}
        <BentoBox 
          size="sm" 
          animationDelay={500} 
          className="p-0 overflow-hidden group aspect-square relative"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center opacity-80"></div>
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col h-full justify-center items-center">
            <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-primary">🖥️</span>
            </div>
            <p className="text-sm font-medium text-white drop-shadow-md">Development</p>
          </div>
        </BentoBox>

        {/* Photography box with camera image */}
        <BentoBox 
          size="sm" 
          animationDelay={700} 
          className="p-0 overflow-hidden group aspect-square relative"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32')] bg-cover bg-center opacity-80"></div>
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col h-full justify-center items-center">
            <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-primary">📸</span>
            </div>
            <p className="text-sm font-medium text-white drop-shadow-md">Photography</p>
          </div>
        </BentoBox>
      </div>
    </section>;
};
export default HeroSection;
