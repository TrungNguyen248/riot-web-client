import { RiotIconLarge, YoutubeIcon, FaceBookIcon, TwitterIcon, LinkedInIcon, ArrowGoToTop } from "../../../components/Icons/Icons";


function Footer() {
    return ( 
        <div className={"w-full pb-5 px-5 border-zinc-600 bg-bg-list-news"}>
            <div className="bg-line-footer h-0.5"></div>
            <div className={"max-w-8xl ml-auto mr-auto"}>
                <div className={"flex py-7 items-center justify-between"}>
                    <div className={"flex "}> 
                        <a className={"pr-5 fill-text-icon-footer hover:fill-red-500 transition hover:cursor-pointer"} href="#">
                            <RiotIconLarge />
                        </a>
                        <div className="inline-block ">
                            <ul className={"inline-block [&>li]:px-3 [&>li] [&>li]:inline-block [&>li>a]:transition [&>li>a]:inline-block [&>li>a]:p-2 [&>li>a]:text-xs [&>li>a]:uppercase [&>li>a]:font-bold [&>li>a]:decoration-1 [&>li>a]:text-text-icon-footer"}>
                                <li><a className="hover:text-white hover:underline" href="#">press</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">security</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">legal</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">leadership</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">candidate privacy</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">terms of service</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">privacy notice</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">player support</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">e-verify</a></li>
                                <li><a className="hover:text-white hover:underline" href="#">accessibility</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"flex [&>*]:w-10 [&>*]:fill-text-icon-footer"}>
                        <a className="hover:fill-red-500 transition" href="#"><FaceBookIcon /></a>
                        <a className="hover:fill-red-500 transition" href="#"><TwitterIcon /></a>
                        <a className="hover:fill-red-500 transition" href="#"><LinkedInIcon /></a>
                        <a className="hover:fill-red-500 transition" href="#"><YoutubeIcon /></a>
                    </div>
                </div>
                <div className={"bg-line-footer h-0.5"}></div>
                <div className={"flex justify-between py-7 "}>
                    <div className="flex ">
                        <div className="relative after:absolute after:-right-4 after:bg-text-icon-footer after:h-5/6 after:top-1/2 after:-translate-y-1/2 after:w-0.5">
                            <a href="#" className="text-sm hover:underline text-text-icon-footer hover:text-white">Cookie Preferences</a>
                        </div>
                        <div className="flex items-center ml-6">
                            <p className="text-xs text-text-icon-footer ">© 2023 Riot Games, Inc. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="flex items-center group ">
                        <a href="#top" className="mr-2 text-sm font-medium text-text-icon-footer uppercase group-hover:text-red-500">Go to surface </a>
                        <div className="fill-text-icon-footer group-hover:fill-red-500">
                            <ArrowGoToTop />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;