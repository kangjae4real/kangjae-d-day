import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Large } from "@/components/typography";
import { useRouter } from "next/navigation";
import ThemeButton from "@/components/theme-button";
import TimeViewTypeDropdownMenu from "@/components/time-view-type-dropdown-menu";
import { useRecoilState } from "recoil";
import { TimeViewType, timeViewTypeAtom } from "@/recoil/time";

const headerVariants = cva("w-full flex justify-between items-center border-b px-3 lg:px-0", {
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
  const { push } = useRouter();
  const [timeViewType, setTimeViewType] = useRecoilState(timeViewTypeAtom);

  return (
    <header className={cn(headerVariants({ size }), className)} {...props}>
      <div>
        <Large className="cursor-pointer" onClick={() => push("/")}>
          KANGJAE D-DAY
        </Large>
      </div>

      <div className="flex items-center gap-4">
        <TimeViewTypeDropdownMenu value={timeViewType} onChange={(type) => setTimeViewType(type as TimeViewType)} />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
