import propTypes from 'prop-types'
import { NavLink } from "react-router-dom"

function NavMenuItem({title, to}) {
    return ( 
      <NavLink to={to} className={" flex py-2 px-4 rounded-md my-1 text-neutral-400 hover:text-slate-300 hover:bg-white/20"}> 
        <span className={"text-sm font-medium"}>{title}</span>
      </NavLink>
     );
}


NavMenuItem.propTypes = {
    icon: propTypes.node,
    to: propTypes.string,
    title: propTypes.string.isRequired
};

export default NavMenuItem;