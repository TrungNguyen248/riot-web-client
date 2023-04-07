import axios from "axios"
import * as httpRequest from "../../utils/httpRequest"
import { useEffect, useState } from "react"
import {explore_hero_bg} from "../../assets/images"
import { NavLink } from "react-router-dom"

function News() {
    let [newsArray, setNewsArray] = useState([])
    let newsLastest = newsArray[0] || {}

    useEffect(() => {
        async function fetchData () {
            const result = await axios.get("http://localhost:5000/news")
            setNewsArray(result.data)  
        }
        fetchData()
    }, [])

    return ( 
        <div>
            <div className={"fixed top-0 -z-50"}>
                <img 
                    src={explore_hero_bg} 
                    alt="explore_hero_bg"
                    
                    />
            </div>
            <div className={"absolute top-24"}>
                <span>Show me</span>
                <button>Everything</button>
            </div>
            <div className={""}>
                <div className={"absolute top-1/4 mt-10 w-full"}>
                    <div className={"px-10"}>
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
                    </div>
                    <div className={"relative grid grid-cols-2 mt-10 bg-bg-news-second after:absolute after:-top-3/4 after:translate-y-1/4 after:w-full after:bg-bg-news-first after:h-4/5 after:-z-10"}>
                        {newsArray.slice(1).map((news, index) => (
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
        
        );
}

export default News;