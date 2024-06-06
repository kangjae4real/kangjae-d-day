import React, { useCallback, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useRecoilValue } from "recoil";
import { timeViewTypeAtom } from "@/recoil/time";
import { H1 } from "@/components/typography";
import dayjs from "@/lib/dayjs";
import { EXPIRED_DATE } from "@/lib/constants";
import useInterval from "@/hooks/use-interval";
import Loading from "@/components/loading";

const countdownVariants = cva("w-full h-full flex justify-center items-center");

interface CountdownProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof countdownVariants> {}

const Countdown = ({ className, ...props }: CountdownProps) => {
  const timeViewType = useRecoilValue(timeViewTypeAtom);
  const [content, setContent] = useState<string>();

  const calculateTime = useCallback(() => {
    if (!timeViewType) {
      return;
    }

    const now = dayjs();
    const expiredDate = dayjs(EXPIRED_DATE);
    const remainingTime = expiredDate.diff(now, timeViewType).toLocaleString("ko-KR");

    switch (timeViewType) {
      case "months":
        setContent(`${remainingTime}개월`);
        break;
      case "days":
        setContent(`${remainingTime}일`);
        break;
      case "hours":
        setContent(`${remainingTime}시간`);
        break;
      case "minutes":
        setContent(`${remainingTime}분`);
        break;
      case "seconds":
        setContent(`${remainingTime}초`);
        break;
    }
  }, [timeViewType]);

  useInterval(calculateTime, 1000);

  return (
    <div className={cn(countdownVariants(), className)} {...props}>
      {content ? <H1 className="text-5xl lg:text-7xl">{content}</H1> : <Loading align="center" size="xxl" />}
    </div>
  );
};

export default Countdown;
