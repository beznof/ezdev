import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
}

const initialThemeProviderState: ThemeProviderState = {
  theme: "dark",
  toggleTheme: () => null
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialThemeProviderState);

export function ThemeProvider({ children, defaultTheme="dark", storageKey="theme", ...props} : ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem(storageKey) as Theme || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark")

    root.classList.add(theme)
  },[theme]);

  const value = { theme, 
    toggleTheme: () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem(storageKey, newTheme);
    }
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  return context;
}