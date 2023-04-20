
function About() {
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
                <div className={"w-full px-40"}>
                    <div>
                        <p>We aspire to be the most player-focused game company in the world</p>
                        <p>
                            <a href={""}>Riot Games </a>
                             was founded in 2006 to develop, publish, and support the most player-focused games in the world. In 2009, we released our debut title, 
                             <a href={""}>League of Legends</a>, to worldwide acclaim. League has gone on to be the most-played PC game in the world and a key driver of the explosive growth of esports. 
                        </p>
                        <p>
                        With <span className="italic">League</span> in its second decade, we’re continuing to evolve the game while delivering new experiences to players with 
                        <a href={""}>Teamfight Tactics</a> , 
                        <a href={""}>Legends of Runeterra</a> , 
                        <a href={""}>VALORANT</a> ,
                        <a href={""}>League of Legends: Wild Rift</a> , 
                        and multiple work-in-progress titles. In addition, Riot Forge gives developers access to Riot’s IP to create games like Ruined King and plenty of other adventures across Runeterra. We’re also expanding the world of Runeterra through 
                        multimedia projects across music, comic books, board games, and 
                        <a href={""}>Arcane</a>, our Emmy Award-winning animated series.
                        </p>
                        <p>
                        The annual <a href={""}> League of Legends World Championship</a> features qualified esports teams from 12 international leagues. Worlds is the most widely viewed and followed esport tournament, and it’s among the largest and most popular gaming and sporting events in the world. 
                        </p>
                        <p>
                        Founded by Brandon Beck and Marc Merrill, and led by CEO Nicolo Laurent, Riot is headquartered in Los Angeles, California, and has 4,500+ Rioters in 20+ offices worldwide. Riot has been certified as a 
                        <a href={""}> Great Place to Work </a>for three years in a row and featured on numerous lists including Fortune’s “100 Best Companies to Work For,” “25 Best Companies to Work in Technology,” “100 Best Workplaces for Millennials,” and “50 Best Workplaces for Flexibility.”
                        </p>
                    </div>
                </div>
            </div>
     );
}

export default About;