import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


function MenuSwitch({children, data}) {
    let [listMenu, setListMenu] = useState([])
    let [isOpen, setIsOpen] = useState(false)
    let [urlImg, setUrlImg] = useState("")
    let [defaultBg, setDefaultBg] = useState(false)
    let [defaultUrl, setDefaultUrl] = useState("")


    useEffect(() => {
        setListMenu(data.links)
        setDefaultBg(true)
        setDefaultUrl(data.cards)
    },[])
   

    return ( 

        <div className={`w-full h-full z-60 fixed top-0 left-0 bottom-0 right-0 overflow-hidden bg-white animate-dropDown`}>
            <div className={"w-full h-20 flex items-center px-10 justify-between"}>             
                {children}      
            </div>
            <div className={"grid grid-cols-3 w-1/2 pl-10 animate-opacityContent"}>               
                {
                    listMenu.map((item, index) => (
                        <div 
                            className={"pl-5"}
                            key={index}
                        >
                            <p 
                                className={"font-bold py-1 rounded-lg px-3 bg-gray-100"}
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
                                            className={"group py-2 pl-3 rounded-lg hover:bg-hover-list-menu "}
                                            
                                        >
                                            <p 
                                                    
                                                className={"text-sm"}>{listTitle.title}</p>
                                        </div>
                                    </NavLink>

                                    <div className={""}>
                                        
                                        {
                                        isOpen && <img 
                                            key={index}
                                            className={`absolute w-2/5 right-10 w- rounded-lg top-1/2 -translate-y-1/2 `} 
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
            <div className={"absolute top-1/2 -translate-y-1/2 right-0 w-1/2 px-6 animate-opacityContent"}>
                <div className={"flex w-full"}>
                    {
                        defaultBg && defaultUrl.map((item, index) => (         
                            <div
                                key={index}
                                className={"p-2 w-1/2"}>
                                <NavLink>                      
                                    <img
                                        className={"transition animate-opacityImg ease-in-out duration-200 rounded-md border-2 border-slate-200 hover:drop-shadow-lg hover:outline-none"} 
                                        src={item.asset.url} />
                                    <p className={"text-sm mt-2"}>{item.title}</p>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>  
     );
}

export default MenuSwitch;