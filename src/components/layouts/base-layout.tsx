import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const baseLayoutVariants = cva("");

interface BaseLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof baseLayoutVariants> {}

const BaseLayout = ({ children, className, ...props }: BaseLayoutProps) => {
  return (
    <div className={cn(baseLayoutVariants(), className)} {...props}>
      <div>{children}</div>
    </div>
  );
};

export default BaseLayout;
