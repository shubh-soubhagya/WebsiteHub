import { useState } from "react";
import ArtworkCard from "./ArtworkCard";
import CategoryFilter from "./CategoryFilter";
import madhubaniImage from "@/assets/madhubani-sample.jpg";
import warliImage from "@/assets/warli-sample.jpg";
import pithoraImage from "@/assets/pithora-sample.jpg";

// Sample artwork data
const artworks = [
  {
    id: 1,
    title: "Madhubani Tree of Life",
    artist: "Priya Kumari",
    category: "Madhubani",
    price: 12500,
    image: madhubaniImage,
    isVerified: true,
    isExportReady: true,
    isAuction: false
  },
  {
    id: 2,
    title: "Warli Village Festival",
    artist: "Raman Patil",
    category: "Warli",
    price: 8500,
    image: warliImage,
    isVerified: true,
    isExportReady: false,
    isAuction: true,
    currentBid: 9200
  },
  {
    id: 3,
    title: "Pithora Ceremonial Painting",
    artist: "Bhuri Bai",
    category: "Pithora",
    price: 15000,
    image: pithoraImage,
    isVerified: true,
    isExportReady: true,
    isAuction: false
  },
  {
    id: 4,
    title: "Madhubani Fish Motif",
    artist: "Sita Devi",
    category: "Madhubani",
    price: 7500,
    image: madhubaniImage,
    isVerified: true,
    isExportReady: false,
    isAuction: false
  },
  {
    id: 5,
    title: "Warli Harvest Dance",
    artist: "Jivya Soma Mashe",
    category: "Warli",
    price: 18000,
    image: warliImage,
    isVerified: true,
    isExportReady: true,
    isAuction: true,
    currentBid: 19500
  },
  {
    id: 6,
    title: "Pithora Sacred Horses",
    artist: "Lado Bai",
    category: "Pithora",
    price: 22000,
    image: pithoraImage,
    isVerified: true,
    isExportReady: true,
    isAuction: false
  }
];

const ArtworkGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArtworks = artworks.filter(artwork => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "verified") return artwork.isVerified;
    if (selectedCategory === "export") return artwork.isExportReady;
    if (selectedCategory === "auction") return artwork.isAuction;
    return artwork.category.toLowerCase() === selectedCategory;
  });

  return (
    <section id="gallery" className="py-16">
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Artworks
          </h2>
          <p className="text-lg text-muted-foreground">
            Showing {filteredArtworks.length} authentic pieces from verified artisans
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              title={artwork.title}
              artist={artwork.artist}
              category={artwork.category}
              price={artwork.price}
              image={artwork.image}
              isVerified={artwork.isVerified}
              isExportReady={artwork.isExportReady}
              isAuction={artwork.isAuction}
              currentBid={artwork.currentBid}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;