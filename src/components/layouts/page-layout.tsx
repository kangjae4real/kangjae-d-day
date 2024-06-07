import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Header from "@/components/header";
import Footer from "@/components/footer";

const pageLayoutVariants = cva("w-full h-full");

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageLayoutVariants> {
  hideHeader?: boolean;
  hideFooter?: boolean;
  childrenClassName?: ClassValue;
}

const PageLayout = ({
  children,
  className,
  hideHeader = false,
  childrenClassName,
  hideFooter = false,
  ...props
}: PageLayoutProps) => {
  return (
    <div className={cn(pageLayoutVariants(), className)} {...props}>
      {!hideHeader && <Header />}
      <div className={cn("h-[calc(100dvh-60px)] w-full", childrenClassName)}>{children}</div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
