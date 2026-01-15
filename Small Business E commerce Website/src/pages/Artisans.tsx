import Navigation from "@/components/Navigation";
import ArtisanSection from "@/components/ArtisanSection";
import Footer from "@/components/Footer";

const Artisans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Meet Our Artisans</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the master craftspeople preserving India's rich artistic heritage
            </p>
          </div>
          <ArtisanSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Artisans;