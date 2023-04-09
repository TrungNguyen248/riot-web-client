import propTypes from 'prop-types';
import {SmallArrowDown} from '../Icons'

function NavMenu({title, children}) {
    return ( 
            <nav>
                <div className={"group rounded relative top-0 w-30 h-full text-center cursor-pointer hover:bg-white/20"}>
                    <div className={'flex items-center'}>
                        <p className={'uppercase px-5 py-1 font-bold text-sm text-slate-300 group-hover:text-white'}>{title}</p>
                        <button className={'relative -left-4 group-hover:translate-y-0.5 transition ease-in-out delay-150'} >
                            <SmallArrowDown />
                        </button>
                    </div>
                    {children}
                </div>
            </nav>
        );
}

NavMenu.propTypes = {
    children: propTypes.node.isRequired,
    title: propTypes.string.isRequired
}

export default NavMenu;