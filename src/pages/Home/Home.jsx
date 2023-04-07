import { 
    bg_home,
    mageseeker_preorder_riothome_logo 
} from "../../assets/images";
import { ArrowRight } from "../../components/Icons"

function Home() {

    return ( 
        <div className="absolute top-0">
            <div className={"-z-10"}>
                <img
                    className={"brightness-75"}
                    src={bg_home} alt="background_home"/>
            </div>
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
            <div className={"h-96"}>
                <p>Adjakjdjakdlks</p>
            </div>
        </div>

     );
}

export default Home;
