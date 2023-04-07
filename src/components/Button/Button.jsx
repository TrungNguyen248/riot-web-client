import { Link } from "react-router-dom"
import propTypes from "prop-types"

function Button({
    to,
    href,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button'
    let props = {
        onClick,
        ...passProps
    }

    if(to) {
        props.to = to
        Comp = Link
    } else if(href) {
        props.href = href
        Comp = 'a'
    }

    return ( 
        <Comp {...props}>
            <p>{children}</p>
        </Comp>
     );
}

Button.propTypes = {
    to: propTypes.string,
    href: propTypes.string,
    children: propTypes.node.isRequired,
    onClick: propTypes.func,
}

export default Button;
