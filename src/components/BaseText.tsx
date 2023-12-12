import { useTheme } from "styled-components";

const BaseText = ({className} : {className?: string}) => {

    const theme = useTheme()
    console.log(theme)
    
    return (
            <h1 className={className}>Este es el mejor título del mundo.</h1>
            
    )
}

export default BaseText