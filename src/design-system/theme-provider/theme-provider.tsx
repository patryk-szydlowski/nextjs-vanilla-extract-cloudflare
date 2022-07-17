import { type ReactNode, createContext, useCallback, useMemo, useState } from "react";

import { baseTheme, darkTheme, lightTheme } from "@/design-system/core/theme.css";

type Theme = "dark" | "light";

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

const { Provider } = createContext<ThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

type Props = {
  children: ReactNode;
};

export const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useState<Theme>("light");
  const colorThemeClass = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  }, []);

  const context = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <Provider value={context}>
      <div className={`${baseTheme} ${colorThemeClass}`}>{props.children}</div>
    </Provider>
  );
};
