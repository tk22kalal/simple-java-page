import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-accent rounded-lg w-fit">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;