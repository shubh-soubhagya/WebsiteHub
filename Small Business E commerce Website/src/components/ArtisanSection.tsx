import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Award } from "lucide-react";

const artisans = [
  {
    id: 1,
    name: "Priya Kumari",
    location: "Madhubani, Bihar",
    specialty: "Madhubani",
    rating: 4.9,
    artworks: 47,
    verified: true,
    exportReady: 12,
    description: "Master of traditional Madhubani art with 20+ years of experience"
  },
  {
    id: 2,
    name: "Raman Patil",
    location: "Thane, Maharashtra", 
    specialty: "Warli",
    rating: 4.8,
    artworks: 32,
    verified: true,
    exportReady: 8,
    description: "Tribal art specialist preserving Warli traditions"
  },
  {
    id: 3,
    name: "Bhuri Bai",
    location: "Jhabua, Madhya Pradesh",
    specialty: "Pithora",
    rating: 4.9,
    artworks: 28,
    verified: true,
    exportReady: 15,
    description: "Renowned Pithora artist and Padma Shri awardee"
  }
];

const ArtisanSection = () => {
  return (
    <section id="artisans" className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Artisans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the master craftspeople preserving India's rich artistic heritage 
            and creating authentic folk art for the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <Card key={artisan.id} className="art-hover bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-xl text-foreground">
                        {artisan.name}
                      </h3>
                      {artisan.verified && (
                        <Badge variant="default" className="bg-primary">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{artisan.location}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">{artisan.specialty}</Badge>
                </div>
                
                {/* Rating and Stats */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-medium">{artisan.rating}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {artisan.artworks} artworks
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground text-cultural">
                  {artisan.description}
                </p>
                
                {/* Export Ready Badge */}
                {artisan.exportReady > 0 && (
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-sm text-accent font-medium">
                      {artisan.exportReady} Export Ready pieces
                    </span>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="cultural" className="flex-1">
                    View Art
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="p-8 gradient-sunset">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Are you a traditional artist?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Join our platform to showcase your art to the world, connect with art lovers, 
                and preserve your cultural heritage for future generations.
              </p>
              <Button variant="secondary" size="lg" className="mt-4">
                Apply as Artisan
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSection;