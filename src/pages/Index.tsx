import Counter from "@/components/Counter";
import ContactForm from "@/components/ContactForm";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap, Sparkles, Globe, Heart } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "Interactive JavaScript",
      description: "Modern ES6+ JavaScript with real-time functionality and smooth animations.",
      delay: 100
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Clean, modern interface with custom gradients and thoughtful typography.",
      delay: 200
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description: "Optimized performance with responsive design that works on all devices.",
      delay: 300
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Modern Web Page
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A clean, interactive HTML page with JavaScript functionality. 
              Experience modern web development with beautiful design and smooth interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="h-14 px-8 bg-gradient-primary shadow-button hover:shadow-lg transition-spring text-lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-14 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg"
              >
                <Globe className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern web technologies for the best user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Out</h2>
            <p className="text-lg text-muted-foreground">
              Interactive elements powered by JavaScript
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start justify-items-center">
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <Counter />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-destructive animate-bounce-soft" />
            <p className="text-muted-foreground">
              Built with modern web technologies
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            HTML • CSS • JavaScript • React • TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
