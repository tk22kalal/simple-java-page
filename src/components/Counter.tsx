import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, RotateCcw } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <Card className="w-full max-w-sm bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Interactive Counter</CardTitle>
        <CardDescription>Click the buttons to see JavaScript in action</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-6xl font-bold text-primary animate-bounce-soft">
            {count}
          </div>
        </div>
        
        <div className="flex justify-center space-x-3">
          <Button 
            variant="outline" 
            size="icon"
            onClick={decrement}
            className="h-12 w-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Minus className="h-5 w-5" />
          </Button>
          
          <Button 
            onClick={reset}
            className="h-12 px-6 bg-gradient-primary shadow-button hover:shadow-lg transition-spring"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={increment}
            className="h-12 w-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          {count === 0 && "Start counting!"}
          {count > 0 && count <= 5 && "Keep going!"}
          {count > 5 && count <= 10 && "You're on fire! 🔥"}
          {count > 10 && "Amazing! 🎉"}
          {count < 0 && "Going negative! 📉"}
        </div>
      </CardContent>
    </Card>
  );
};

export default Counter;