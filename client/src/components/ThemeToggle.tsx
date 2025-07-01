import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative border-ribison-neutral-300 hover:bg-ribison-neutral-100 dark:border-ribison-neutral-600 dark:hover:bg-ribison-neutral-800 hover:scale-105 transition-all duration-300 shadow-ribison hover:shadow-ribison-md"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-ribison-primary" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-ribison-primary-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-background/95 backdrop-blur-md border-ribison-neutral-200 dark:border-ribison-neutral-700 shadow-ribison-lg"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")} 
          className={`hover:bg-ribison-neutral-100 dark:hover:bg-ribison-neutral-800 cursor-pointer transition-colors ${theme === "light" ? "bg-ribison-primary-50 dark:bg-ribison-primary-900/20" : ""}`}
        >
          <Sun className="mr-2 h-4 w-4 text-ribison-primary" />
          <span className="font-medium">Light</span>
          {theme === "light" && <div className="ml-auto w-2 h-2 bg-ribison-primary rounded-full" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")} 
          className={`hover:bg-ribison-neutral-100 dark:hover:bg-ribison-neutral-800 cursor-pointer transition-colors ${theme === "dark" ? "bg-ribison-primary-50 dark:bg-ribison-primary-900/20" : ""}`}
        >
          <Moon className="mr-2 h-4 w-4 text-ribison-primary" />
          <span className="font-medium">Dark</span>
          {theme === "dark" && <div className="ml-auto w-2 h-2 bg-ribison-primary rounded-full" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")} 
          className={`hover:bg-ribison-neutral-100 dark:hover:bg-ribison-neutral-800 cursor-pointer transition-colors ${theme === "system" ? "bg-ribison-primary-50 dark:bg-ribison-primary-900/20" : ""}`}
        >
          <div className="mr-2 h-4 w-4 rounded border border-ribison-neutral-400 flex items-center justify-center">
            <div className="w-2 h-2 bg-gradient-to-r from-ribison-primary to-ribison-blue rounded-full" />
          </div>
          <span className="font-medium">System</span>
          {theme === "system" && <div className="ml-auto w-2 h-2 bg-ribison-primary rounded-full" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}