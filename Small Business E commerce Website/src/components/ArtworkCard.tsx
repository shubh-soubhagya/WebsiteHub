import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, Eye, ShoppingCart } from "lucide-react";

interface ArtworkCardProps {
  title: string;
  artist: string;
  category: string;
  price: number;
  image: string;
  isVerified?: boolean;
  isExportReady?: boolean;
  isAuction?: boolean;
  currentBid?: number;
}

const ArtworkCard = ({ 
  title, 
  artist, 
  category, 
  price, 
  image, 
  isVerified = false,
  isExportReady = false,
  isAuction = false,
  currentBid
}: ArtworkCardProps) => {
  return (
    <Card className="art-hover bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge variant="secondary" className="bg-background/90">
            {category}
          </Badge>
          {isVerified && (
            <Badge variant="default" className="bg-primary/90">
              Verified Artist
            </Badge>
          )}
          {isExportReady && (
            <Badge variant="outline" className="bg-accent/90 text-accent-foreground">
              Export Ready
            </Badge>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-background">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="bg-background/90 hover:bg-background">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground line-clamp-1">{title}</h3>
          <p className="text-muted-foreground text-sm">by {artist}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {isAuction ? (
              <div>
                <p className="text-xs text-muted-foreground">Current Bid</p>
                <p className="font-bold text-primary">₹{currentBid?.toLocaleString()}</p>
              </div>
            ) : (
              <p className="font-bold text-lg text-primary">₹{price.toLocaleString()}</p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {isAuction ? (
          <Button variant="artisan" className="w-full">
            Place Bid
          </Button>
        ) : (
          <div className="flex gap-2 w-full">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="cultural" className="flex-1">
              Buy Now
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ArtworkCard;