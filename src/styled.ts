import { styled } from 'styled-components'
import BaseButton from './components/BaseButton'
import BaseText from './components/BaseText';

export const StyledButton = styled(BaseButton)`
  font-family: ${props => props.theme.fonts.main};
  font-size: 2vmax;
  padding-inline-end: 5vmax;
  border-radius: 0.5vmax;
  cursor: pointer;
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.contrastColor};
  background-color: ${props => props.theme.contrastColor};
  order: ${(props) => props.order};
`

export const StyledText = styled(BaseText)`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: normal;
  font-size: 2vmax;
  color: ${props => props.theme.contrastColor};
`

export const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-size, 1fr);
    gap: ${props => props.theme.margins.gap};
    margin: ${props => props.theme.margins.margin};
`

export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 1vmax;
    padding: ${props => props.theme.margins.padding};
`