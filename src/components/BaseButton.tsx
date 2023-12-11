
type ButtonClickEvent = React.MouseEventHandler<HTMLButtonElement>

const BaseButton = ({children, className, onClick} : {onClick?: ButtonClickEvent, children?: string, className?: string}) => {
    return (
            <button onClick={onClick} className={className}>{children}</button>
    )
}

export default BaseButton