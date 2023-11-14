
import exampleImage from './assets/example.jpg'
import { Section, ResponsiveImage, Title, StyledSimpleText, ButtonExtended } from './styled'
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
          <StyledSimpleText>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus cum quidem odio dicta ipsam nesciunt earum numquam ex nulla facere. 
            Laborum est qui quasi animi cum alias tempore, sint ut.</StyledSimpleText>
        </div>

          <Button textButton='Primary' primary={true} />
          <Button textButton='Normal' primary={false} />
          <ButtonExtended>Extended button</ButtonExtended>
      </Section>
    </>
  )
}

export default App
