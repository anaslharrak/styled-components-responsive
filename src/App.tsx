
import exampleImage from './assets/example.jpg'
import { Section, ResponsiveImage, Title, 
  StyledSimpleText, ButtonExtended, GridDiv, 
  NavResponsive, NavElement, ResponsiveIcon } from './styled'
import Button from './components/Button'
import iconBars from './assets/iconBars.svg'
import xMark from './assets/xmark.svg'
import { useState } from 'react'

function App() {

  const [toggle, setToggle] = useState(false)

  const toggleIcon = () => {
    setToggle(!toggle)
  }

  return (
    <>

      <NavResponsive>
        <NavElement href="#">Inicio</NavElement>
        <NavElement href="#">Sobre nosotros</NavElement>
        <NavElement href="#">Contacto</NavElement>

        <ResponsiveIcon src={toggle ? xMark : iconBars} onClick={toggleIcon} alt="" />
      </NavResponsive>

      {
        toggle 
          ? 
          <Section>
            <h1>Inicio</h1>
            <h1>Sobre nosotros</h1>
            <h1>Contacto</h1>
          </Section>
        :  
        <Section>
          <div>
            <ResponsiveImage src={exampleImage} alt="Responsive image"/>
          </div>

          <div>
            <Title>Headline</Title>
            <GridDiv>
              <StyledSimpleText>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatibus cum quidem odio dicta ipsam nesciunt earum numquam ex nulla facere. 
              Laborum est qui quasi animi cum alias tempore, sint ut.</StyledSimpleText>

              <Button textButton='Primary' primary={true} />
              <Button textButton='Normal' primary={false} />
              <ButtonExtended>Extended button</ButtonExtended>
            </GridDiv>
        
          </div>
        </Section>
      }

          
    </>
  )
}

export default App
