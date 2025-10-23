import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import { resources, categories } from "@/data/resources";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary/20 via-accent/10 to-background border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card rounded-full shadow-sm">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">InternGuide Resources</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Career Success Hub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Everything you need for internship success in one place. Find all your career preparation materials organized and ready to explore.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-2 focus:border-primary shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <>
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredResources.length}</span> resource{filteredResources.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {filteredResources.map((resource) => (
                <ResourceCard 
                  key={resource.id}
                  id={resource.id}
                  title={resource.title}
                  description={resource.description}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Ready to Take Charge of Your Career?
            </h3>
            <p className="text-muted-foreground mb-4">
              Explore these resources at your own pace and build the skills that will set you apart. Your future starts with the actions you take today.
            </p>
            <p className="text-sm text-muted-foreground">
              Have a resource to suggest?{" "}
              <a href="mailto:feedback@internguide.com" className="text-primary hover:underline font-medium">
                Let us know
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
