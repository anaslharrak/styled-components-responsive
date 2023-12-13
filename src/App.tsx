import { StyledButton, StyledText, StyledDiv, StyledSection} from './styled';
import { ThemeProvider } from 'styled-components';
import { lightTheme, lightThemeRTL, darkTheme, coralTheme, oliveTheme } from './theme';
import { useState } from 'react';


const App = () => {

  const [theme, setTheme] = useState(lightTheme)
  const [direction, setDirection] = useState('ltr')

  const changeDirection = () => {
   direction === 'ltr' ? setDirection('rtl') : setDirection('ltr')
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div dir={direction}>

      
        <StyledButton>1</StyledButton>
        <StyledButton>2</StyledButton>
        <StyledButton>3</StyledButton>

          <StyledSection>
            <StyledText />
            <StyledDiv>
              <StyledButton onClick={() => setTheme(darkTheme)}>Change theme to Dark.</StyledButton>
              <StyledButton onClick={() => setTheme(lightTheme)}>Change theme to Light.</StyledButton>
              <StyledButton onClick={() => setTheme(coralTheme)}>Change theme to Coral.</StyledButton>
              <StyledButton onClick={() => setTheme(oliveTheme)}>Change theme to Olive.</StyledButton>
              <StyledButton onClick={() => changeDirection()}>Change display to {direction === 'ltr' ? 'RTL' : 'LTR'}.</StyledButton>
            </StyledDiv>
          </StyledSection>

        </div>
      </ThemeProvider>

    </>
    
  );
};

export default App;