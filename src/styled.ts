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
    tabletLandscape: `(min-width: ${size.tablet}) and (orientation: landscape)`,
    pc: `(min-width: ${size.pc})`,
    pcLandscape: `(min-width: ${size.pc}) and (orientation: landscape)`,
    pcXL: `(min-width: ${size.pcXL})`,
    pc2XL6: `(min-width: ${size.pc2XL})`,
    mobilLandscape: `(orientation: landscape)`,
  }
  
 export const Section = styled.section`
    display: grid;
    height: auto;
    width: auto;
    padding: 2vw;
    gap: 1vw;
    background-color: #34D399;
    text-align: center;
    border-radius: 0.5vw;

    @media ${device.mobilLandscape} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      
    }

    @media ${device.tabletLandscape} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      background-color: black;
    }

    @media ${device.tablet} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: center;
      background-color: #FB923C;
      gap: 0.25vw;
    }
  
    @media ${device.pc} {
      background-color: #60A5FA;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `
  
 export const ResponsiveImage = styled.img`
    width: 100%;
    border-radius: 0.5vw;
  `
  
 export const Title = styled.h1`
    margin-bottom: 0.5vw;
    font-size: 2rem;
    font-weight: 900;

    @media ${device.mobilLandscape} {
      font-size: 1.75rem;
    }
    
    @media ${device.tablet} {
        font-size:  2.25rem;
      }
    @media ${device.tabletLandscape} {
        font-size:  2rem;
    }
    @media ${device.pc} {
        font-size:  3.5rem;
      }

      @media ${device.pcLandscape} {
        font-size:  2.5rem;
    }
  `

  export const StyledSimpleText = styled.p`
    font-size:  1.25rem;
    font-weight: 100;
    
    @media ${device.tablet} {
        font-size:  1.75rem;
      }
    @media ${device.tabletLandscape} {
        font-size:  1.5rem;
      }
    @media ${device.pc} {
        font-size:  2.75rem;
      }
    @media ${device.pcLandscape} {
        font-size:  2.25rem;
    }
    
  `

 export const ButtonStyled = styled.button<{ $primary?: boolean; }>`
  background: ${props => props.$primary ? "#3aa17b" : "white"};
  color: ${props => props.$primary ? "white" : "#3aa17b"};

  font-size: 1rem;
  border: 2px solid #3aa17b;
  border-radius: 3px;
  height: 100%;

  @media ${device.tablet} {
    background: ${props => props.$primary ? "#d46408" : "white"};
    color: ${props => props.$primary ? "white" : "#d46408"};
    border: 2px solid #d46408;
    font-size: 1.75rem;
  }

  @media ${device.tabletLandscape} {
        font-size:  1.25rem;
    }

  @media ${device.pc} {
    background: ${props => props.$primary ? "#076ff0" : "white"};
    color: ${props => props.$primary ? "white" : "#076ff0"};
    border: 2px solid #076ff0;
    font-size: 2.75rem;
  }

  @media ${device.pcLandscape} {
        font-size:  2rem;
  }
`;

export const ButtonExtended = styled(ButtonStyled)`
border: solid 2px #ad6c6c;
color: red;
`