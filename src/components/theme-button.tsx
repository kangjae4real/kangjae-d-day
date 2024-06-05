import { useTheme } from "next-themes";
import useClient from "@/hooks/use-client";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [ready] = useClient();

  if (!ready) {
    return <Skeleton className="h-[36px] w-[36px] rounded border" />;
  }

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeButton;
