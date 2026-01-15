import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-sunset rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">Artify</span>
            </div>
            <p className="text-muted-foreground text-sm text-cultural">
              Preserving India's rich folk art heritage through digital innovation. 
              Connecting traditional artisans with art lovers worldwide.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">Cultural Preservation</Badge>
              <Badge variant="outline">Export Ready</Badge>
            </div>
          </div>
          
          {/* Art Forms */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Art Forms</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Madhubani</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warli</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pithora</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gond Art</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kalamkari</a></li>
            </ul>
          </div>
          
          {/* For Artists */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Artists</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Join Platform</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Verification Process</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Export Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Artist Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cultural Heritage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Authenticity</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Artify. Preserving cultural heritage, one artwork at a time.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cultural Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;