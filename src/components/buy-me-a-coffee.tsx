import React, { useMemo, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Lead } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "@/components/image";
import useWindowSize from "@/hooks/use-window-size";

const BuyMeACoffeeInfo = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const isDesktop = useMemo(() => width >= 1024, [width]);
  const image = (
    <Image
      src="/assets/bmc-button.png"
      alt="Buy Me A Coffee"
      href="https://www.buymeacoffee.com/kangjae"
      target="_blank"
      width={217}
      height={60}
    />
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <HeartFilledIcon className="mr-2" />
            커피 사주기
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>감사합니다!</DialogTitle>
            <DialogDescription>아래 이미지를 클릭하여 이동해주세요.</DialogDescription>
          </DialogHeader>

          <div className="flex h-full w-full items-center justify-center">{image}</div>

          <DialogFooter>
            <DialogClose>
              <Button variant="outline" className="w-full">
                닫기
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
          <HeartFilledIcon className="mr-2" />
          커피 사주기
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>감사합니다!</DrawerTitle>
          <DrawerDescription>아래 이미지를 클릭하여 이동해주세요.</DrawerDescription>
        </DrawerHeader>
        <div className="flex h-full w-full items-center justify-center">{image}</div>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              닫기
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const buyMeACoffeeVariants = cva("flex justify-center items-center py-4 gap-2 lg:gap-3");

interface BuyMeACoffeeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof buyMeACoffeeVariants> {}

const BuyMeACoffee = ({ className, ...props }: BuyMeACoffeeProps) => {
  return (
    <div className={cn(buyMeACoffeeVariants(), className)} {...props}>
      <Lead>고생하는 강재를 위해</Lead>
      <BuyMeACoffeeInfo />
    </div>
  );
};

export default BuyMeACoffee;
