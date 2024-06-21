"use client";

import { forwardRef, ComponentPropsWithRef, ElementRef, AnchorHTMLAttributes } from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

interface ImageProps extends ComponentPropsWithRef<typeof NextImage> {
  href?: LinkProps["href"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}

export const Image = forwardRef<ElementRef<typeof NextImage>, ImageProps>(
  ({ children, className, href, target, width, height, ...props }, ref) => {
    const image = (
      <NextImage
        ref={ref}
        className={cn(`w-[${width}px] h-[${height}px]`, className)}
        width={width}
        height={height}
        {...props}
      >
        {children}
      </NextImage>
    );

    if (!href || !target) {
      return image;
    }
    return (
      <Link href={href} target={target}>
        {image}
      </Link>
    );
  },
);
Image.displayName = "Image";

export default Image;
