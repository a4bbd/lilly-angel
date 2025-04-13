
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatWidgetProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  change?: {
    value: number;
    trend: "up" | "down" | "neutral";
  };
  className?: string;
}

export const StatWidget = ({
  title,
  value,
  description,
  icon,
  change,
  className
}: StatWidgetProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
            
            {change && (
              <div className="flex items-center mt-1">
                {change.trend === "up" && (
                  <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                )}
                {change.trend === "down" && (
                  <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                {change.trend === "neutral" && (
                  <Minus className="w-4 h-4 text-gray-500 mr-1" />
                )}
                
                <span 
                  className={cn("text-xs font-medium", 
                    change.trend === "up" && "text-green-500",
                    change.trend === "down" && "text-red-500",
                    change.trend === "neutral" && "text-gray-500"
                  )}
                >
                  {change.value > 0 && "+"}
                  {change.value}%{" "}
                  <span className="text-muted-foreground">vs last period</span>
                </span>
              </div>
            )}
            
            {description && (
              <p className="text-sm text-muted-foreground mt-2">{description}</p>
            )}
          </div>
          
          <div className="rounded-full p-2 bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
