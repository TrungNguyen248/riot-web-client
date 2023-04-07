import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import DefaultImage from "./DefaultImage"

function MenuSwitch() {
    let [listMenu, setListMenu] = useState([])
    let [isOpen, setIsOpen] = useState(false)
    let [urlImg, setUrlImg] = useState("")
    let [defaultBg, setDefaultBg] = useState(false)
    let [defaultUrl, setDefaultUrl] = useState("")

    useEffect(() => {
        useFetch("https://cdn.rgpub.io/public/live/riotbar/content-manifests/en_US.json")
            .then((res) => {
                const data = res.app_switcher_2.links
                const url = res.app_switcher_2.cards
                setListMenu(data)
                setDefaultUrl(url)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


   

    return ( 
        <div className={"w-full absolute top-20 z-50 bg-red-300"}>
                <div className={"grid grid-cols-3 w-1/2 pl-10 bg-stone-500"}>
                        {
                            listMenu.map((item, index) => (
                                <div 
                                    className={"pl-5"}
                                    key={index}
                                >
                                    <p 
                                        
                                        className={"font-bold py-1 rounded-lg px-3 bg-slate-300"}
                                    >{item.title}</p>
                                    {
                                        item.products.map((listTitle, index) => (
                                            <div
                                                key={index} 
                                            >
                                            <NavLink>
                                                <div 
                                                    onMouseOver={() => {
                                                        setIsOpen(true)
                                                        setUrlImg(listTitle.asset.url)    
                                                        setDefaultBg(false)
                                                    }}
                                                    onMouseOut={() => {
                                                        setIsOpen(false)
                                                        setDefaultBg(true)
                                                    }}
                                                    className={"group py-2 px-3 rounded-xl hover:bg-slate-500 "}
                                                    
                                                >
                                                    <p 
                                                         
                                                        className={"text-sm"}>{listTitle.title}</p>
                                                </div>
                                            </NavLink>

                                            <div className={""}>
                                                <div className={"absolute"}>
                                                    {
                                                        defaultBg && defaultUrl.map((url,index) => (
                                                            <DefaultImage 
                                                                key={index}
                                                                className={""} 
                                                                url={url.asset.url}/>
                                                        ))
                                                    }
                                                </div>
                                               {
                                                isOpen && <img 
                                                    key={index}
                                                    className={"absolute right-10 h-3/5 rounded-lg top-1/2 -translate-y-1/2"} 
                                                    src={urlImg} /> 
                                               }
                                               
                                            </div>
                                            </div>
                                        ))
                                    }   
                                </div>
                            ))
                        }
                </div>
                <div>

                </div>
            </div>
     );
}

export default MenuSwitch;