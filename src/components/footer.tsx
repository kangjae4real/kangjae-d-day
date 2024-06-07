import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { P } from "@/components/typography";

const footerVariants = cva("w-full flex justify-center items-center border-t", {
  variants: {
    size: {
      sm: "h-[40px]",
      md: "h-[60px]",
      lg: "h-[80px]",
      xl: "h-[100px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface FooterProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof footerVariants> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(footerVariants(), className)} {...props}>
      <P>© 2024 by Kangjae Choi. All rights reserved.</P>
    </footer>
  );
};

export default Footer;
