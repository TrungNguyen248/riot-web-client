
import { NavLink } from "react-router-dom";
import { 
    bg_home,
    mageseeker_preorder_riothome_logo 
} from "../../assets/images";
import { ArrowRight } from "../../components/Icons"
import useFetch from "../../hooks/useFetch";
import { useEffect,useState } from "react";



function Home() {
    const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL
    const [listNews, setListNews] = useState([])
    let firstNews = listNews[0] || []

    useEffect(() => {
        useFetch(`${VITE_REACT_APP_BASE_URL}/news`)
            .then((res) => {
                setListNews(res)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return ( 
        <div className="absolute top-0">
            {/* background home */}
            <div className={"-z-10"}>
                <img
                    className={"brightness-75"}
                    src={bg_home} alt="background_home"/>
            </div>
            {/* content home bg */}
            <div className={"absolute top-12 left-44 w-2/5 h-screen justify-items-center"}>
                <div className={"w-90"}>
                    <img src={mageseeker_preorder_riothome_logo} alt="title_logo_new_game"/>
                </div> 
                <div className={"-translate-x-20 mt-8 text-center"}>
                        <p className={"text-3xl font-bold text-white "}>Coming April 18 - Developed by Digital Sun</p>
                        <p className={"p-4 text-lg mt-1 font-medium text-zinc-400"}>The Mageseeker is an action RPG set in the League of Legends universe.
                         Play as Sylas and wield the chains that once bound you to liberate Demacia from tyranny.</p>
                        <div className={"absolute left-1/2 -translate-x-1/2 mt-5 "}>
                            <div className={"flex h-18 w-64 items-center justify-between rounded-3xl px-6 cursor-pointer transition ease-linear duration-100 bg-gradient-to-tr from-orange-gradient-bold from-0% to-orange-gradient-semi to-100% text-white bg-orange-300 hover:drop-shadow-button-learn-more hover:from-orange-gradient-bold hover:from-0% hover:via-orange-gradient-semi hover:via-50%  hover:to-orange-gradient-semi hover:to-100% "}>
                                <div className={"flex w-12 h-12 rounded-full bg-black items-center justify-center drop-shadow-button-next"}>
                                    <ArrowRight />
                                </div>
                                <p className={"text-2xl text-black font-bold"}>Learn More</p>
                            </div>
                        </div>
                </div>
            </div>
            {/* What's happening? */}
            <div className={"w-full bg-black bg-gradient-to-br from-color-bg-home-first via-color-bg-home-second to-color-bg-home-second"}>
                <div className={"px-20"}>
                    <div className={"flex py-20 justify-between"}>
                        <p className={"text-5xl font-bold text-white"}>What's happening?</p>
                        <NavLink>
                            <button className={"bg-bg-news-first py-1 px-2 rounded-lg text-sm font-bold uppercase"}>See more</button>
                        </NavLink>
                    </div>
                    <div className={"flex w-full"}>
                        <div className={" w-3/5 mr-6"}>
                            <NavLink className={"relative"}>
                                <img 
                                    className={"rounded-lg brightness-90"}
                                    src={firstNews.imageUrl}/>
                                <p className={"absolute left-5 bottom-14 font-bold text-2xl text-color-text-news"}>{firstNews.title}</p>
                                <span className={"absolute left-5 text-base uppercase font-bold bottom-8 text-color-text-tag-news"}>{firstNews.tag}</span>
                            </NavLink>
                        </div>
                        <ul className={"w-2/5 "}>
                            {listNews.slice(1).map((news, index) => (
                                <li 
                                    className={"relative overflow-hidden  flex mb-3 rounded-lg "}
                                    key={index}>
                                    <NavLink className={"w-full"}>
                                        <div className={"group flex items-center justify-between outline-2 outline-yellow-500"}>
                                            <div className={"relative z-10 w-1/2 pl-5 after:absolute after:z-0 after:-top-24 after:-left-4 after:w-80 after:rotate-12 after:h-52 after:bg-bg-list-news group-hover:after:bg-neutral-700"}> 
                                                <p className={"relative truncate z-10 text-lg font-semibold  text-color-text-news"}>{news.title}</p>
                                                <span className={"relative text-base z-10 font-bold uppercase text-color-text-tag-news"}>{news.tag}</span>
                                            </div>
                                            <div className={""}>
                                                <img
                                                    className={"h-30 rounded-lg"} 
                                                    src={news.imageUrl} />
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                        ))}
                        </ul>
                    </div>
                </div>
            
            </div>
            {/* Games */}
            <div>
                
            </div>
        </div>
     );
}

export default Home;
