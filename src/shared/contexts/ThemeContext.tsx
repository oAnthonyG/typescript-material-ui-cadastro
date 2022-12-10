import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import React, { createContext, ReactNode, useCallback, useMemo, useState, useContext } from "react";
import { DarkTheme, LigthTheme } from "../themes";


interface IThemeContextData {
  themeName: 'light' | 'dark';

  toggleTheme: () => void;
}
interface IAppThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () =>{
  return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LigthTheme;

    return DarkTheme
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        {children}
        </Box>
      </ThemeProvider>

    </ThemeContext.Provider>
  )
}