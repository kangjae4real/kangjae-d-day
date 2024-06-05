import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Large } from "@/components/typography";

const headerVariants = cva("w-full flex items-center border-b px-3 lg:px-0", {
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

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof headerVariants> {}

const Header = ({ className, size, ...props }: HeaderProps) => {
  return (
    <header className={cn(headerVariants({ size }), className)} {...props}>
      <div>
        <Large>Kangjae D-DAY</Large>
      </div>
    </header>
  );
};

export default Header;
