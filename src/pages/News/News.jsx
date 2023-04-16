import { useEffect, useRef, useState } from "react"
import {explore_hero_bg} from "../../assets/images"
import { NavLink } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import NewsFilter from "../../components/NewsFilter"
import { ArrowRegular, CloseIcon } from "../../components/Icons";


function News() {
    const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL
    const buttonFilterNews = useRef()
    
    const tagNews = ["Everything", "Offices", "Disciplines", "News", "Inside Riot", "One-Shot"]

    let [isOpen, setIsOpen] = useState(false)
    let [newsArray, setNewsArray] = useState([])
    let newsLastest = newsArray[0] || []
    let [tag, setTag] = useState("")
    

    const handleOnClick = () => {
        setIsOpen(false)
    }
    
    const handleOnClickTag = (item) => {
        handleOnClick()
        setTag(item)
    }

    useEffect(() => {
        if(tag === 'Everything' || !tag) {    
            buttonFilterNews.current.innerHTML = "Everything"
            useFetch(`${VITE_REACT_APP_BASE_URL}/news`)
            .then((res) => {
                setTag("")
                setNewsArray(res)  
            })
            .catch((err) => {
                console.log(err)
            })   
        }
        else {
            buttonFilterNews.current.innerHTML = tag
            useFetch(`${VITE_REACT_APP_BASE_URL}/news?q=${tag.toLowerCase()}`)
            .then((res) => {
                setNewsArray(res)
            })
            .catch((err) => {
                console.log(err)
            })  
            }
        }, [tag])
        
        
        return ( 
            <>
            {isOpen && <div><NewsFilter 
                handleOnClickTag={handleOnClickTag}
                tagNews={tagNews} 
                
                children={
                    <button 
                        onClick={() => {setIsOpen(false)}}
                        className={"group absolute top-10 right-10 z-10 "}>
                        <span>
                            <CloseIcon width="2.5rem" height="2.5rem"/>
                        </span>
                    </button>
                } 
                /></div>}
            <div className={isOpen ? "hidden" : ""}>
                <div className={`fixed top-0 ${!tag ? "-z-50" : ""}`}>
                    <img 
                        src={explore_hero_bg} 
                        alt="explore_hero_bg"
                        
                        />
                </div>
                <div className={"absolute w-full flex justify-center top-24 "}>
                    <div className={"flex items-center"}>
                        <span className={"text-2xl font-semibold text-color-text-tag-news mr-3"}>Show me</span>
                        <button 
                            ref={buttonFilterNews}
                            onClick={() => {setIsOpen(true)}}
                            className={"text-color-text-news font-bold text-2xl mr-3 pr-6"}
                        >
                            Everything
                        </button>
                        <div className={`relative -left-4 ${ !tag ? "-z-10" : ""}`}>
                            <ArrowRegular />
                        </div>
                    </div>
                    
                </div>
                <div className={""}>
                    <div className={"absolute top-1/4 mt-10 w-full"}>
                        {!tag && <div className={"px-10"}>
                        <NavLink to={newsLastest.urlNews}>
                            <div className={"relative group w-full overflow-hidden"}>
                                <img 
                                    className={"w-full ease-in-out duration-300 group-hover:brightness-70 group-hover:scale-105"}
                                    src={newsLastest.imageUrl} 
                                />
                            <div className={"mt-10"}>
                                <span className={"bg-red-600 px-3 text-white font-medium"}>{newsLastest.tag}</span>
                                <p
                                    className={"text-4xl font-bold my-5"}
                                    >{newsLastest.title}</p>
                                <p
                                    className={""}
                                    >{newsLastest.subTitle}</p>
                            </div>
                            </div>
                            </NavLink>
                        </div>}
                        <div className={"relative grid grid-cols-2 mt-10 bg-bg-news-second after:absolute after:-top-3/4 after:translate-y-1/4 after:w-full after:bg-bg-news-first after:h-4/5 after:-z-10"}>
                            {!tag && newsArray.slice(1).map((news, index) => (
                                <div 
                                    key={index}
                                    className={"p-10"}
                                >
                                    <NavLink to={news.urlNews}>
                                        <div className={"group"}>
                                            <div className={"w-full overflow-hidden"}>
                                                <img 
                                                    src={news.imageUrl}
                                                    className={"ease-in-out duration-300 group-hover:brightness-70 group-hover:scale-105"}
                                                />
                                            </div>
                                            <div className={"mt-12"}>
                                                <span className={"bg-red-600 px-3 text-white font-medium"}>{news.tag}</span>
                                                <p className={"my-4 text-2xl font-bold"}>{news.title}</p>
                                                <p>{news.subTitle}</p>  
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                            {tag && newsArray.map((news, index) => (
                                <div 
                                    key={index}
                                    className={"p-10"}
                                >
                                    <NavLink to={news.urlNews}>
                                        <div className={"group"}>
                                            <div className={"w-full overflow-hidden"}>
                                                <img 
                                                    src={news.imageUrl}
                                                    className={"ease-in-out duration-300 group-hover:brightness-70 group-hover:scale-105"}
                                                />
                                            </div>
                                            <div className={"mt-12"}>
                                                <span className={"bg-red-600 px-3 text-white font-medium"}>{news.tag}</span>
                                                <p className={"my-4 text-2xl font-bold"}>{news.title}</p>
                                                <p>{news.subTitle}</p>  
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                    
            </div>
        </>
        
        );
}

export default News;