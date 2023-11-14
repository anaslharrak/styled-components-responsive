import { ButtonStyled } from "../styled"

const Button = ({textButton, primary} : {textButton: string, primary: boolean}) => {


    return (
            primary 
                ? <ButtonStyled $primary>{textButton}</ButtonStyled> 
                : <ButtonStyled>{textButton}</ButtonStyled>
    )
}

export default Button