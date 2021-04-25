import React from 'react';

const ThemeContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export default ThemeContext;
