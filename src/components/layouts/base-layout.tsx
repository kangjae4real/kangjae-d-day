import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const baseLayoutVariants = cva("h-full min-h-dvh", {
  variants: {
    width: {
      default: "w-full max-w-[1000px] mx-auto",
      full: "w-full",
    },
  },
  defaultVariants: {
    width: "default",
  },
});

interface BaseLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof baseLayoutVariants> {}

const BaseLayout = ({ children, className, width, ...props }: BaseLayoutProps) => {
  return (
    <div className={cn(baseLayoutVariants({ width }), className)} {...props}>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default BaseLayout;
