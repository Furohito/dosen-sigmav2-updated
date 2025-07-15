
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
