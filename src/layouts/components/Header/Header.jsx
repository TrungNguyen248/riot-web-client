import { useState, useEffect} from "react";
import MenuSwitch from "../../../components/MenuSwitch";
import {GlobeIcon, 
        RiotLogo, 
        RiotMenuIcon, 
        SmallArrowDown, 
        SmallArrowUp, 
        RiotMenuSwitchIcon, 
        CloseIcon}
        from "../../../components/Icons"
import NavMenu from "../../../components/NavMenu/NavMenu";
import NavMenuItem from "../../../components/NavMenu/NavMenuItem";
import { NavLink } from "react-router-dom"
import config from "../../../config"
import Search from "../Search/Search";
import useFetch from "../../../hooks/useFetch"

import UserMenu from "../../../components/UserMenu/UserMenu";


function Header() {
    const styleWrapMenu = "hidden absolute rounded-sm top-full mt-3 left-0 w-52 p-4 text-sm bg-neutral-800 after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:bg-red-600 after:rounded-tr-sm after:rounded-tl-sm group-hover:block before:absolute before:-top-3 before: before:left-0 before:w-full before:h-5 before:bg-transparent"
    let bg_color = "bg-transparent"
    let border_searchInput = "border-white"
    let bg_searchInput = "bg-transparent"
    let placeholder_searchInput = "placeholder:text-white"
    
    let [listMenu, setListMenu] = useState([])
    let [isOpenMenu, setIsOpenMenu] = useState(false)
    let [offset, setOffset] = useState(0)

    
    useEffect(() => {
        useFetch("https://cdn.rgpub.io/public/live/riotbar/content-manifests/en_US.json")
            .then((res) => {
                const data = res.app_switcher_2
                setListMenu(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    useEffect(() => {
        const onScroll = () => (
            setOffset(window.pageYOffset)
        )
        
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [])


    if(offset > 80) {
        bg_color = "delay bg-black"
        border_searchInput = "border-black"
        bg_searchInput = "bg-zinc-800"
        placeholder_searchInput = ""
    }

    return ( 
        <>
            {  isOpenMenu && <MenuSwitch data={listMenu} children={
                    <>
                        <div
                        className={"flex items-center hover:cursor-pointer hover:fill-red-500"}>
                            <button
                                onClick={() => {setIsOpenMenu(false)}}    
                            >
                                <RiotMenuSwitchIcon />
                            </button>
                            <SmallArrowUp />
                        </div>
                        <button
                            onClick={() => {setIsOpenMenu(false)}}
                        >
                            <CloseIcon />
                        </button>
                    </>
                    }/> }
            <div 
                className={
                `fixed w-full flex z-50 items-center ${bg_color} px-10 h-20`
                }>
                <div className={"basis-2/3 flex"}>
                    <div className={"flex items-center h-full hover:fill-red-500"}> 
                        <button
                            onClick={() => {setIsOpenMenu(true)}}
                        >
                            <RiotMenuIcon />
                        </button>
                        <SmallArrowDown
                            className={"ml-0.5"}
                        />
                    </div>
                    <NavLink className={"ml-5"} to={config.routes.home}>
                        <RiotLogo />
                    </NavLink>
                    <div className="flex ml-8">
                        <NavMenu title="Who we are">
                            <div className={styleWrapMenu}>
                                <NavMenuItem title="About Riot" to={config.routes.about}/>
                                <NavMenuItem title="Diversity & Inclusion" to={config.routes.diversity_and_inclusion}/>
                                <NavMenuItem title="Social Impact" to={config.routes.social_impact}/>
                            </div>
                        </NavMenu>
                        <NavMenu title="Work with us">
                            <div className={styleWrapMenu}>
                                <NavMenuItem title="Jobs" to={config.routes.home}/>
                                <NavMenuItem title="Benefits" to={config.routes.home}/>
                                <NavMenuItem title="Offices" to={config.routes.home}/>
                                <NavMenuItem title="Life At Riot" to={config.routes.home}/>
                            </div>
                        </NavMenu>
                        <NavLink 
                            className={"group uppercase px-5 py-1 rounded-md font-bold text-sm text-slate-300 hover:text-white hover:bg-white/20"}
                            to={config.routes.news}
                        >
                            <span className={"relative after:absolute after:left-0 after:rounded-sm after:hidden after:group-hover:block after:-translate-x-5 after:translate-y-2 after:-bottom-3.5 after:w-24 after:h-1 after:bg-red-600 "}>News</span>
                        </NavLink>
                    </div>
                </div>
                <div className={"basis-1/3 flex justify-end"}>
                    <div className={"flex text-slate-200 items-center"}>
                        <div className={"mr-5"}>
                            <button>
                                <GlobeIcon />   
                            </button>
                        </div>
                        <div className={`flex w-48 h-9 mr-2 items-center py-0 ${bg_searchInput} border-solid rounded-full border-2 ${border_searchInput} overflow-hidden`}>
                            <Search placeholder_searchInput={placeholder_searchInput}/>
                        </div>
                        <div>
                            <UserMenu />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Header;