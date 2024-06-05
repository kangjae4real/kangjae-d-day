import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { H1 } from "@/components/typography";

const heroVariants = cva("flex items-center flex-col gap-8");

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof heroVariants> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <div className={cn(heroVariants(), className)} {...props}>
      <span className="text-5xl font-thin">강재의 전역까지 앞으로</span>
      <H1 className="text-7xl lg:text-7xl">140일</H1>
      <span className="text-5xl font-thin">남았습니다.</span>
    </div>
  );
};

export default Hero;
