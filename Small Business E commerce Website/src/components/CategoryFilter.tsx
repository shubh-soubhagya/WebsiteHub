import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { 
    name: "All Artworks", 
    value: "all", 
    description: "Browse all traditional art forms",
    count: 2000 
  },
  { 
    name: "Madhubani", 
    value: "madhubani", 
    description: "Bihar's vibrant storytelling art",
    count: 750 
  },
  { 
    name: "Warli", 
    value: "warli", 
    description: "Maharashtra's tribal geometric art",
    count: 680 
  },
  { 
    name: "Pithora", 
    value: "pithora", 
    description: "Gujarat's ceremonial folk paintings",
    count: 420 
  },
  { 
    name: "Other Folk Arts", 
    value: "others", 
    description: "Various traditional art forms",
    count: 150 
  }
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore by Art Form
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the rich heritage of India's traditional folk art forms, 
            each telling unique stories through vibrant colors and patterns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.value}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                selectedCategory === category.value 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => onCategoryChange(category.value)}
            >
              <div className="space-y-3 text-center">
                <h3 className="font-semibold text-lg text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground text-cultural leading-relaxed">
                  {category.description}
                </p>
                <Badge variant="secondary" className="mt-2">
                  {category.count} artworks
                </Badge>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Button 
            variant={selectedCategory === "verified" ? "cultural" : "outline"}
            onClick={() => onCategoryChange("verified")}
          >
            Verified Artists Only
          </Button>
          <Button 
            variant={selectedCategory === "export" ? "heritage" : "outline"}
            onClick={() => onCategoryChange("export")}
          >
            Export Ready
          </Button>
          <Button 
            variant={selectedCategory === "auction" ? "artisan" : "outline"}
            onClick={() => onCategoryChange("auction")}
          >
            Live Auctions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;