import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { useTheme } from './theme/useTheme';
import { GlobalStyles } from './theme/GlobalStyles';
import ThemeSelector from './ThemeSelector';


const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles />
        <Container style={{fontFamily: selectedTheme.font}}>
          <h1>Theme Builder</h1>
          <p>
            This is a theming system with a Theme Switcher and a Theme Builder.
            Do you want to see the source code? <a href="https://github.com/TeodoraAlina/theme-builder" target="_blank">Click here.</a>
          </p>
          <ThemeSelector setter={ setSelectedTheme} />
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
