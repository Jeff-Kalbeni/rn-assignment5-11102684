import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { darkTheme, defaultTheme } from "../helper/theme";
 
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);
  const findOldTheme = async () => {
     const themeMode = await AsyncStorage.getItem('themeMode');
     if(themeMode !== null) { 
      themeMode === 'default' ? setTheme(defaultTheme) : setTheme(darkTheme);
      setIsLoadingTheme(false);
     }
     setIsLoadingTheme(false);
  }
  useEffect(() => {
    findOldTheme()
  });

  const updateTheme = (currentThemeMode) => {
    const newTheme = currentThemeMode === 'default' ? darkTheme : defaultTheme;
    setTheme(newTheme);
  }

  return(
    <ThemeContext.Provider value={{ theme, isLoadingTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);

export const styles = StyleSheet.create({

});

export default ThemeProvider;