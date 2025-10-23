import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
}

const ResourceCard = ({ id, title, description }: ResourceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors flex-1">
            {title}
          </CardTitle>
          <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-base leading-relaxed">
          {description}
        </CardDescription>
        <Link to={`/resource/${id}`}>
          <Button 
            variant="default" 
            className="w-full group-hover:bg-accent transition-colors"
          >
            View Resource
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
