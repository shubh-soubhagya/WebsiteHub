import Navigation from "@/components/Navigation";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import { useState } from "react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Art Categories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore different forms of traditional Indian folk art
            </p>
          </div>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;