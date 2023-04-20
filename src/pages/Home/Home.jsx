
import { NavLink } from "react-router-dom";
import { 
    bg_home,
    lolkv_2023,
    lorka_2023,
    tft_2023,
    val_6_2,
    msi_2023,
    wrka_2023
} from "../../assets/images";
import { ArrowRight, MacsPlatForm, MobilePlatForm, WinDowsPlatForm } from "../../components/Icons"
import useFetch from "../../hooks/useFetch";
import { useEffect, useState, useRef } from "react";
import SliderHome from "../../components/SliderHome/SliderHome";
import config from "../../config";
import Video from "../../components/Video/Video";
import { msi_2023_video} from "../../assets/videos"


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
        <div>
            {/* background home */}
            <div className={"-z-10 "}>
                {/* <img
                    className={"brightness-75"}
                    src={bg_home} alt="background_home"/> */}
                <div className="relative top-0  ">
                    { <Video url={msi_2023_video} fallbackImg={bg_home}/> }
                </div>
            </div>
            {/* content home bg */}
            <div className={"absolute top-40 left-44 w-2/5 h-screen justify-items-center"}>
                <div className={"w-90"}>
                    <img src={msi_2023} alt="title_logo_new_game"/>
                </div> 
                <div className={"-translate-x-20 mt-8 text-center"}>
                        <p className={"text-3xl font-bold text-white "}>MSI 2023 HYPE FILM</p>
                        <p className={"p-4 text-lg mt-1 font-medium text-zinc-400"}>The time to DEFY is NOW. Get ready for an all out battle in London.</p>
                        <div className={"absolute left-1/2 -translate-x-1/2 mt-5 "}>
                            <div className={"flex h-18 w-64 items-center justify-between rounded-3xl px-6 cursor-pointer transition ease-linear duration-100 bg-gradient-to-tr from-orange-gradient-bold from-0% to-orange-gradient-semi to-100% text-white bg-orange-300 hover:drop-shadow-button-learn-more hover:from-orange-gradient-bold hover:from-0% hover:via-orange-gradient-semi hover:via-50%  hover:to-orange-gradient-semi hover:to-100% "}>
                                <div className={"flex w-12 h-12 rounded-full bg-black items-center justify-center drop-shadow-button-next"}>
                                    <ArrowRight />
                                </div>
                                <p className={"text-2xl text-white font-bold"}>Watch Now</p>
                            </div>
                        </div>
                </div>
            </div>
            {/* What's happening? */}
            <div className={"w-full bg-black bg-gradient-to-br from-color-bg-home-first via-color-bg-home-second to-color-bg-home-second"}>
                <div className={"px-20 pb-20"}>
                    <div className={"flex py-20 justify-between"}>
                        <p className={"text-5xl font-bold text-white"}>What's happening?</p>
                        <NavLink to={config.routes.news}>
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
                            {listNews.slice(1).slice(0, 4).map((news, index) => (
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
            {/* Games, Esports, Entertainment, Riot Forge */}
            <div className={"w-full px-20 pb-20"}>
                {/* Games */}
                <div className={"w-full py-20"}>
                    <p className={"text-5xl font-bold text-white"}>Games</p>
                </div>
                <div className={"grid grid-cols-2 gap-x-5 gap-y-12"}>
                    <div className={"group relative max-h-72 "}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={lolkv_2023}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/a28dfa2308a772466c7d2018a87ac000:0e9fb5e8f3944bcd4375d6960d21962e/lol-logotype.png"} />
                            </div>
                            <div className={"relative top-12 flex justify-center"}>
                                <div className={"flex bg-white/10 rounded-full"}>
                                    <div>
                                        <WinDowsPlatForm />
                                    </div>
                                    <div>
                                        <MacsPlatForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"group relative max-h-72"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={val_6_2}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/fc4d867e755e5215833d94e88068b0ab:ead77c56e200894c762889c3cd81a2e1/valorant-logotype.png"} />
                            </div>
                            <div className={"relative top-12 flex justify-center"}>
                                <div className={"flex bg-white/10 rounded-full"}>
                                    <div>
                                        <WinDowsPlatForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"group relative max-h-72"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={tft_2023}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/2877a75d4539547a238b481e200edd9f:b10a003b28b89d37cc0e446bab19f206/tft-logotype-2021.png"} />
                            </div>
                            <div className={"relative top-12 flex justify-center"}>
                                <div className={"flex bg-white/10 rounded-full"}>
                                    <div>
                                        <WinDowsPlatForm />
                                    </div>
                                    <div>
                                        <MacsPlatForm />
                                    </div>
                                    <div>
                                        <MobilePlatForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"group relative max-h-72"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={wrka_2023}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/ac2e0c26a8f48cbaf0009eefb028b75f:8cddf84aea3fbcf72d02380c5d050e36/lol-wildrift-logotype.png"} />
                            </div>
                            <div className={"relative top-12 flex justify-center"}>
                                <div className={"flex bg-white/10 rounded-full"}>
                                    <div>
                                       <MobilePlatForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"group relative max-h-72 left-1/2"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={lorka_2023}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/3ae3913f7992eebc555ea77d1e17657b:d7874f08ba1161ac419a8f45dcfa0ae0/legends-of-runeterra-logotype.png"} />
                            </div>
                            <div className={"relative top-12 flex justify-center"}>
                                <div className={"flex bg-white/10 rounded-full"}>
                                    <div>
                                        <WinDowsPlatForm />
                                    </div>
                                    <div>
                                        <MobilePlatForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Esports */}
                <div className={"w-full py-20"}>
                    <p className={"text-5xl font-bold text-white"}>Esports</p>
                </div>
                <div className={"grid grid-cols-2 gap-x-5 gap-y-12"}>
                    <div className={"group relative max-h-72"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={"https://www.riotgames.com/darkroom/855/08b848016e83b6da600cb96fcc660a6c:15c7f6907624f60b5164aca1b0387b52/lol-esports-card.png"}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/0939c3ff242b8b032dd058a1731f8bb7:2590ba002dc218bc42154fc46a6556f0/lol-esports-logo.png"} />
                            </div>
                        </div>
                    </div>     
                    <div className={"group relative max-h-72"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={"https://www.riotgames.com/darkroom/855/a6f62a96a3d1f5f0b0e18a9c9870fa04:cc9e8536a314ca986a97857b77254ccf/val-esports-card.png"}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/f69179e31bf0999e26e08082d6eca330:f0dfd06d62ff54c5fb98cbc258313662/vct2022-logo.png"} />
                            </div>
                        </div>
                    </div>     
                </div>
                {/* Entertainment */}
                <div className={"w-full py-20"}>
                    <p className={"text-5xl font-bold text-white"}>Entertainment</p>
                </div>
                <div className={"grid grid-cols-2 gap-x-5 gap-y-12"}>
                    <div className={"group relative max-h-72"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={"https://www.riotgames.com/darkroom/855/8e43c45318fd4d29006d12f8523ea289:48efcf51118eac260aa9ac16c73ae91c/arcane-card.png"}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/50b82946b634692d11e20c8cc145029b:16507b949c1253289723d0d0249bc5cd/arcane-logo-white.png"} />
                            </div>
                        </div>
                    </div>     
                    <div className={"group relative max-h-72"}>
                        <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                            <img className={"rounded-md"} src={"https://www.riotgames.com/darkroom/855/c38a2e0e070ba045a40bd4b77bfeeaf1:bba41997f467361e190a4dd616679837/riot-music-card.png"}/>
                        </div>
                        <div className={"absolute w-1/4 left-10 top-1/2 -translate-y-1/2"}>
                            <div className={"w-full"}>
                                <img src={"https://www.riotgames.com/darkroom/350/77dde25ffe4d870deb7b4727f8fa1ec5:2a1221b2c925d6df0be31e4a4f0624d4/riotgames-music.png"} />
                            </div>
                        </div>
                    </div>     
                </div>
                {/*  Riot Forge */}
                <div className={"w-full py-20"}>
                    <p className={"text-5xl font-bold text-white"}>Riot Forge</p>
                </div>
                <div className={"w-full "}>
                    <SliderHome />
                </div>
            </div>
        </div>
     );
}

export default Home;
