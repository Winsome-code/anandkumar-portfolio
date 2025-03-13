
import BentoBox from "./BentoBox";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const WorkSection = () => {
  return (
    <section id="work" className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-medium text-primary/70 mb-2">EXPLORE MY WORK</span>
          <h2 className="section-heading">Featured Projects</h2>
        </div>
      </div>

      <div className="bento-grid grid-cols-1 md:grid-cols-2 auto-rows-auto">
        {/* Design Work Box - 4:3 ratio */}
        <BentoBox
          className="overflow-hidden p-0 relative group"
          size="xl"
          animationDelay={100}
        >
          <AspectRatio ratio={4/3} className="w-full">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                Design Portfolio
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Creative Designs</h3>
              <p className="text-white/80 mb-4">"Where creativity meets functionality—explore my design world."</p>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                View Projects
              </button>
            </div>
          </AspectRatio>
        </BentoBox>

        {/* Photography Work Box - 4:3 ratio */}
        <BentoBox
          className="overflow-hidden p-0 relative group"
          size="xl"
          animationDelay={200}
        >
          <AspectRatio ratio={4/3} className="w-full">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                Photography Portfolio
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Visual Storytelling</h3>
              <p className="text-white/80 mb-4">"Every frame tells a story—dive into my lens."</p>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                View Gallery
              </button>
            </div>
          </AspectRatio>
        </BentoBox>
      </div>
    </section>
  );
};

export default WorkSection;
