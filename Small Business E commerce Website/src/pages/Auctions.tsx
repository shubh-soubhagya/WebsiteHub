import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, TrendingUp } from "lucide-react";

const Auctions = () => {
  const activeAuctions = [
    {
      id: 1,
      title: "Madhubani Masterpiece - Goddess Lakshmi",
      artist: "Rajani Devi",
      currentBid: "₹25,000",
      timeLeft: "2h 45m",
      totalBids: 12,
      image: "/src/assets/madhubani-sample.jpg",
      category: "Madhubani"
    },
    {
      id: 2,
      title: "Warli Village Life Scene",
      artist: "Bhau Bhoir",
      currentBid: "₹18,500",
      timeLeft: "1d 3h",
      totalBids: 8,
      image: "/src/assets/warli-sample.jpg",
      category: "Warli"
    },
    {
      id: 3,
      title: "Pithora Festival Painting",
      artist: "Shanti Patel",
      currentBid: "₹32,000",
      timeLeft: "4h 20m",
      totalBids: 15,
      image: "/src/assets/pithora-sample.jpg",
      category: "Pithora"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Live Auctions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bid on exclusive artworks from master artisans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeAuctions.map((auction) => (
              <Card key={auction.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={auction.image} 
                    alt={auction.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    Live Auction
                  </Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {auction.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{auction.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {auction.artist}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Bid</span>
                    <span className="text-2xl font-bold text-primary">{auction.currentBid}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{auction.timeLeft}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{auction.totalBids} bids</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="space-x-2">
                  <Button className="flex-1" variant="outline">
                    View Details
                  </Button>
                  <Button className="flex-1">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Place Bid
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

export default Auctions;