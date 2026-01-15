import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Globe, CheckCircle, Star } from "lucide-react";

const ExportReady = () => {
  const exportReadyArtworks = [
    {
      id: 1,
      title: "Traditional Madhubani Art Set",
      artist: "Mithila Artists Collective",
      price: "₹45,000",
      rating: 4.9,
      image: "/src/assets/madhubani-sample.jpg",
      category: "Madhubani",
      exportCertified: true,
      internationalShipping: true,
      description: "Authentic hand-painted Madhubani artwork with export documentation"
    },
    {
      id: 2,
      title: "Warli Tribal Art Collection",
      artist: "Maharashtra Folk Artists",
      price: "₹38,000",
      rating: 4.8,
      image: "/src/assets/warli-sample.jpg",
      category: "Warli",
      exportCertified: true,
      internationalShipping: true,
      description: "Traditional Warli paintings with cultural authenticity certificate"
    },
    {
      id: 3,
      title: "Pithora Festival Masterpiece",
      artist: "Gujarat Heritage Painters",
      price: "₹52,000",
      rating: 5.0,
      image: "/src/assets/pithora-sample.jpg",
      category: "Pithora",
      exportCertified: true,
      internationalShipping: true,
      description: "Ceremonial Pithora painting with complete export documentation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Export Ready Artworks</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentic Indian folk art with international shipping and export certification
            </p>
          </div>

          <div className="mb-8 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Export Certification Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>International Shipping Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Authenticity Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                <span>Customs Documentation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportReadyArtworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    <Globe className="w-3 h-3 mr-1" />
                    Export Ready
                  </Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {artwork.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{artwork.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {artwork.artist}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{artwork.rating}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{artwork.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{artwork.price}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {artwork.exportCertified && (
                      <Badge variant="outline" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                    {artwork.internationalShipping && (
                      <Badge variant="outline" className="text-xs">
                        <Truck className="w-3 h-3 mr-1" />
                        Global Shipping
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="space-x-2">
                  <Button className="flex-1" variant="outline">
                    View Details
                  </Button>
                  <Button className="flex-1">
                    <Globe className="w-4 h-4 mr-2" />
                    Export Order
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExportReady;