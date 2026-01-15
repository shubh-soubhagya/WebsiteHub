import Navigation from "@/components/Navigation";
import ArtworkGallery from "@/components/ArtworkGallery";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Art Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic Indian folk art from verified artisans across the country
            </p>
          </div>
          <ArtworkGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;