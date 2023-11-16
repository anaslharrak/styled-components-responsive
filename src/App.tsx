
import exampleImage from './assets/example.jpg'
import { Section, ResponsiveImage, Title, StyledSimpleText, ButtonExtended, GridDiv } from './styled'
import Button from './components/Button'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
