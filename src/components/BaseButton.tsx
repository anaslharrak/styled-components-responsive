
type ClickEvent = React.MouseEventHandler<HTMLButtonElement>

const BaseButton = ({children, className, onClick} : {onClick?: ClickEvent, children?: string, className?: string}) => {
    return (
            <button onClick={onClick} className={className}>{children}</button>
    )
}

export default BaseButton