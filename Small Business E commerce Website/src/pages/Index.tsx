import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArtworkGallery from "@/components/ArtworkGallery";
import ArtisanSection from "@/components/ArtisanSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ArtworkGallery />
      <ArtisanSection />
      <Footer />
    </div>
  );
};

export default Index;
