import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Countdown from "@/components/countdown";

const heroVariants = cva("flex items-center flex-col py-2 lg:py-4 gap-4 lg:gap-8");

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof heroVariants> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <div className={cn(heroVariants(), className)} {...props}>
      <span className="text-3xl font-thin lg:text-5xl">강재의 소집해제까지 앞으로</span>
      <Countdown />
      <span className="text-3xl font-thin lg:text-5xl">남았습니다</span>
    </div>
  );
};

export default Hero;
