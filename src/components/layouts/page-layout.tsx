import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { ClassValue } from "clsx";

const pageLayoutVariants = cva("w-full h-full");

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageLayoutVariants> {
  hideHeader?: boolean;
  childrenClassName?: ClassValue;
}

const PageLayout = ({ children, className, hideHeader = false, childrenClassName, ...props }: PageLayoutProps) => {
  return (
    <div className={cn(pageLayoutVariants(), className)} {...props}>
      {!hideHeader && <Header />}
      <div className={cn("h-full w-full py-4", childrenClassName)}>{children}</div>
    </div>
  );
};

export default PageLayout;
