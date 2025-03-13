
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoBoxProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  colSpan?: number;
  rowSpan?: number;
  animationDelay?: number;
}

const BentoBox = ({
  children,
  className,
  size = "md",
  colSpan = 1,
  rowSpan = 1,
  animationDelay = 0,
}: BentoBoxProps) => {
  const sizeClasses = {
    sm: "min-h-[100px]",
    md: "min-h-[150px]",
    lg: "min-h-[200px]",
    xl: "min-h-[250px]",
    "2xl": "min-h-[300px]",
  };

  const colSpanClasses = {
    1: "col-span-1",
    2: "col-span-1 md:col-span-2",
    3: "col-span-1 md:col-span-3",
    4: "col-span-1 md:col-span-4",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-1 md:row-span-2",
    3: "row-span-1 md:row-span-3",
    4: "row-span-1 md:row-span-4",
  };

  return (
    <div
      className={cn(
        "bento-box animate-fade-in opacity-0",
        sizeClasses[size],
        colSpanClasses[colSpan as keyof typeof colSpanClasses],
        rowSpanClasses[rowSpan as keyof typeof rowSpanClasses],
        className
      )}
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default BentoBox;
