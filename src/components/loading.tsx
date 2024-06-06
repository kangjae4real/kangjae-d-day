import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { UpdateIcon } from "@radix-ui/react-icons";

const loadingVariants = cva("w-full h-full", {
  variants: {
    align: {
      default: "flex justify-start items-start",
      center: "flex justify-center items-center",
    },
  },
  defaultVariants: {
    align: "default",
  },
});

const loadingIconVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "w-[17px] h-[17px]",
      md: "w-[20px] h-[20px]",
      lg: "w-[23px] h-[23px]",
      xl: "w-[26px] h-[26px]",
      xxl: "w-[29px] h-[29px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface LoadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof loadingVariants>,
    VariantProps<typeof loadingIconVariants> {}

const Loading = ({ className, align, size, ...props }: LoadingProps) => {
  return (
    <div className={cn(loadingVariants({ align }), className)} {...props}>
      <UpdateIcon className={cn(loadingIconVariants({ size }))} />
    </div>
  );
};

export default Loading;
