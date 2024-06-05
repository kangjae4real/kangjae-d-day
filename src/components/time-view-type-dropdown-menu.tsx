import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { humanizeTimeViewType, TimeViewType } from "@/recoil/time";
import useClient from "@/hooks/use-client";
import { Skeleton } from "@/components/ui/skeleton";
import { ClockIcon } from "@radix-ui/react-icons";

interface TimeViewTypeDropdownMenuProps {
  value: TimeViewType;
  onChange: (value: string) => void;
}

const TimeViewTypeDropdownMenu = ({ value, onChange }: TimeViewTypeDropdownMenuProps) => {
  const [ready] = useClient();

  if (!ready) {
    return <Skeleton className="h-[36px] w-[149px] rounded border" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ClockIcon className="mr-2" />
          {humanizeTimeViewType(value)}로 보는 중
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>시간 타입</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          <DropdownMenuRadioItem value="years">연</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="months">월</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="days">일</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="hours">시</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="minutes">분</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="seconds">초</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TimeViewTypeDropdownMenu;
