import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-folk-art.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional Indian Folk Art" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-traditional opacity-30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-cultural gradient-sunset bg-clip-text text-transparent">
            Artify
          </h1>
          
          <h2 className="text-xl md:text-3xl font-semibold text-foreground/90 max-w-4xl mx-auto">
            Preserving India's Rich Folk Art Heritage Through Digital Innovation
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-cultural leading-relaxed">
            Discover authentic Madhubani, Warli, and Pithora artworks from traditional artisans. 
            Support cultural preservation while owning pieces of India's artistic legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="cultural" size="lg" className="px-8 py-6 text-lg">
              Explore Artworks
            </Button>
            <Button variant="heritage" size="lg" className="px-8 py-6 text-lg">
              Become an Artisan
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Verified Artisans</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">2000+</div>
              <div className="text-muted-foreground">Authentic Artworks</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-muted-foreground">Export Ready Pieces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;