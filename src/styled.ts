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
    pc2XL: `(min-width: ${size.pc2XL})`
  }
  
 export const Section = styled.section`
    display: grid;
    height: auto;
    width: auto;
    align-items: center;
    padding: 2vw;
    gap: 1vw;
    background-color: #34D399;
    text-align: center;
    border-radius: 0.5vw;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    @media ${device.mobilGrande} {
      background-color: #FACBEA;
    }

    @media ${device.tablet} {
      background-color: #FB923C;
    }

    @media ${device.pc} {
      background-color: #60A5FA;
    }

    @media ${device.pcXL} {
      background-color: #EBEF95;
    }

    @media ${device.pc2XL} {
      background-color: #CAEDFF;
    }
  `
  
 export const ResponsiveImage = styled.img`
    width: 100%;
    border-radius: 0.5vw;
  `
  
 export const Title = styled.h1`
    margin-bottom: 0.5vw;
    font-size: 3vw;
    font-weight: 900;
  `

  export const StyledSimpleText = styled.p`
    font-size:  1.25vw;
    font-weight: 100;
    font-size:  2.75vw;
  `

 export const ButtonStyled = styled.button<{ $primary?: boolean; }>`
  background: ${props => props.$primary ? "#3aa17b" : "white"};
  color: ${props => props.$primary ? "white" : "#3aa17b"};

  font-size: 1.75vw;
  border: 2px solid #3aa17b;
  border-radius: 3px;

  @media ${device.mobilGrande} {
    background: ${props => props.$primary ? "#D988B9" : "white"};
    color: ${props => props.$primary ? "white" : "#D988B9"};
    border: 2px solid #D988B9;
  }

  @media ${device.tablet} {
    background: ${props => props.$primary ? "#d46408" : "white"};
    color: ${props => props.$primary ? "white" : "#d46408"};
    border: 2px solid #d46408;
  }
  @media ${device.pc} {
    background: ${props => props.$primary ? "#076ff0" : "white"};
    color: ${props => props.$primary ? "white" : "#076ff0"};
    border: 2px solid #076ff0;
  }

  @media ${device.pcXL} {
    background: ${props => props.$primary ? "#FFCF96" : "white"};
    color: ${props => props.$primary ? "white" : "#FFCF96"};
    border: 2px solid #EFD595;
  }
  
  @media ${device.pc2XL} {
    background: ${props => props.$primary ? "#FFC7EA" : "white"};
    color: ${props => props.$primary ? "white" : "#FFC7EA"};
    border: 2px solid #FFC7EA;
  }
`;

export const ButtonExtended = styled(ButtonStyled)`
  border: solid 2px #ad6c6c;
  color: red;
`

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`

export const NavResponsive = styled.nav`
      padding: 1vw;
      background-color: #f74d4d;
      border: 2px solid #c93c3c;
      display: absolute;
      margin-left: auto;

    @media ${device.pc} {
      background-color: #60A5FA;
      border: 2px solid #076ff0;

      margin: 0;
      width: auto;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    @media ${device.pcXL} {
      background-color: #EBEF95;
      border: 2px solid #EFD595;
    }

    @media ${device.pc2XL} {
      background-color: #CAEDFF;
      border: 2px solid #FFC7EA;
    }
`

export const NavElement = styled.a`
  display: none;

  @media ${device.pc} {
    display: block;
    text-decoration: none;
    margin: 1vw;
    font-size: 1.5vw;
    color: black;
  }  
`

export const ResponsiveIcon = styled.img`
  height: 100%;
  cursor: pointer;

  @media ${device.pc} {
    display: none;
  }
`