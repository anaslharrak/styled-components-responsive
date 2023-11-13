
import exampleImage from './assets/example.jpg'
import styled from 'styled-components'

const size = {
  mobilGrande: '640px',
  tablet: '768px',
  pc: '1024px',
  pcXL: '1280px',
  pc2XL: '1536px'
}

const device = {
  mobilGrande: `(min-width: ${size.mobilGrande})`,
  tablet: `(min-width: ${size.tablet})`,
  pc: `(min-width: ${size.pc})`,
  pcXL: `(min-width: ${size.pcXL})`,
  pc2XL6: `(min-width: ${size.pc2XL})`
}

const Section = styled.section`
  display: grid;
  gap: 2rem;
  background-color: #34D399;
  text-align: center;
  border-radius: 0.5rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    text-align: left;
    background-color: #FB923C;
    padding: 2.5%;
  }

  @media ${device.pc} {
    background-color: #60A5FA;
  }
`

const ResponsiveImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
  font-weight: 500;
`

function App() {

  return (
    <>
     <Section>
        <div>
          <ResponsiveImage src={exampleImage} alt="Responsive image"/>
        </div>

        <div>
          <Title>Headline</Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus cum quidem odio dicta ipsam nesciunt earum numquam ex nulla facere. 
            Laborum est qui quasi animi cum alias tempore, sint ut.</p>
        </div>
      </Section>  
    </>
  )
}

export default App
