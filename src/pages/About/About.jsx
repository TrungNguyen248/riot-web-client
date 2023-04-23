import { useState } from "react";
import { ourValue } from "../../data/ourValue/ourValue";


function About() {
    const [activeItem, setActiveItem] = useState(null)
    const [flex, setFlex] = useState("flex-1")
    const [isOpen, setIsOpen] = useState(false)
    const [urlImgBg, setUrlImgBg] = useState("")

    const urlDefaultImg = 'https://www.riotgames.com/darkroom/1600/556cadca7c826e54a81279bc04dd46d3:4b51464cf9ce6f7ec8bb4f8dd0b0985f/riot-lax-glhf.png'

    const handleOnClick = (index, img) => {
        setActiveItem(index)
        setFlex(flex === "flex-1" ? "[&[aria-current='true']]:flex-2 " : "flex-1")
        setIsOpen(!isOpen)
        setUrlImgBg(img)
    }



    return ( 
            <div className="">
                <div className={"block justify-center items-center "}>
                    <img className="w-full relative brightness-95" src={"https://www.riotgames.com/darkroom/2000/6f5e4567a58b6cfb3ae7b35f7e736173:d4a19ae2b83f78cd2035e13d5b719786/ritodaze-6-3.jpg"} alt="bg_about_us" />
                    <div className={"absolute top-80 w-full inline-block items-center justify-center"}>
                        <div className="text-center flex justify-center">
                            <p className={"py-1 px-4 bg-red-500 text-sm text-white font-bold uppercase"}>Who are we?</p>
                        </div>
                        <p className={"mt-10 text-8xl text-gray-100 text-center font-bold"}>We Are Rioters</p>
                    </div>
                </div>
                {/* COntent */}
                <div className={"w-full px-64 py-40 bg-bg-about-page"}>
                    <div className={"[&>p>a]:text-xl [&>p>a]:font-semibold [&>p>a]:italic [&>p>a]:underline [&>p]:leading-loose"}> 
                        <p className={"text-center font-bold text-4xl px-2 mb-10"}>We aspire to be the most player-focused game company in the world</p>
                        <p className="text-xl">
                            <a href={""}>Riot Games </a>
                             was founded in 2006 to develop, publish, and support the most player-focused games in the world. In 2009, we released our debut title, 
                             <a href={""}>League of Legends</a>, to worldwide acclaim. League has gone on to be the most-played PC game in the world and a key driver of the explosive growth of esports. 
                        </p>
                        <p className="text-xl">
                        With <span className="italic font-semibold">League</span> in its second decade, we’re continuing to evolve the game while delivering new experiences to players with 
                        <a href={""}>Teamfight Tactics</a> , 
                        <a href={""}>Legends of Runeterra</a> , 
                        <a href={""}>VALORANT</a> ,
                        <a href={""}>League of Legends: Wild Rift</a> , 
                        and multiple work-in-progress titles. In addition, Riot Forge gives developers access to Riot’s IP to create games like Ruined King and plenty of other adventures across Runeterra. We’re also expanding the world of Runeterra through 
                        multimedia projects across music, comic books, board games, and 
                        <a href={""}>Arcane</a>, our Emmy Award-winning animated series.
                        </p>
                        <p className="text-xl">
                        The annual <a href={""}> League of Legends World Championship</a> features qualified esports teams from 12 international leagues. Worlds is the most widely viewed and followed esport tournament, and it’s among the largest and most popular gaming and sporting events in the world. 
                        </p>
                        <p className="text-xl">
                        Founded by Brandon Beck and Marc Merrill, and led by CEO Nicolo Laurent, Riot is headquartered in Los Angeles, California, and has 4,500+ Rioters in 20+ offices worldwide. Riot has been certified as a 
                        <a href={""}> Great Place to Work </a>for three years in a row and featured on numerous lists including Fortune’s “100 Best Companies to Work For,” “25 Best Companies to Work in Technology,” “100 Best Workplaces for Millennials,” and “50 Best Workplaces for Flexibility.”
                        </p>
                    </div>
                </div>
                <div className="relative h-full ">
                    <div className="text-center py-20">
                        <h2 className="text-6xl font-extrabold">Our Values</h2>
                    </div>
                    <div className="relative w-full h-full">
                        <div className="absolute flex w-full h-full top-0 flex-row ">
                            {ourValue.map((item, index) => (
                                <div 
                                    aria-current = {activeItem === index}
                                    key={index}
                                    className ={`${flex} relative transition-all duration-300 delay-300 ${ isOpen ? "transition-all duration-300 animate-opacityImg1" : ""} flex-1 h-full text-center text-color-text-news border-r-2`}>
                                    <button
                                        onClick={() => {handleOnClick(index, item.imgUrl)}}
                                        className={`${ activeItem === index && isOpen ? "bg-black/50" : ""} text-white text-3xl font-semibold uppercase w-full h-full`}>
                                    </button>
                                    <div className={`${activeItem === index && isOpen ? "text-5xl top-1/4" : ""} absolute w-full top-1/2 left-1/2 text-3xl uppercase font-bold -translate-x-1/2 -translate-y-1/2`}>{item.title}</div> 
                                    {activeItem === index && isOpen && <p className={"absolute top-1/2 -translate-y-1/3 px-6 text-2xl"}>{item.content}</p>} 
                                </div>
                            ))}
                        </div>
                        <div className={`h-full`}>
                            <img className={`w-full h-full`} src={`${isOpen ? urlImgBg : urlDefaultImg}`} />
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default About;