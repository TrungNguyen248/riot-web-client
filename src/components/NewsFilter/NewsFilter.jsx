import { NavLink } from "react-router-dom";
import { explore_hero_bg } from "../../assets/images";


function NewsFilter({children, tagNews, handleOnClickTag}) {
 

    return ( 
        <>
            <div className={"fixed w-screen h-screen top-0 z-100 overflow-hidden animate-dropDownFilterNews"}>
                <img className={""} src={explore_hero_bg}/>
                {/* button close */}{children}
                <div className={"absolute w-full flex top-1/2 -translate-y-1/2 px-40"}>
                    <span className={"text-color-text-tag-news text-xl font-bold mr-4"}>Filter by</span>
                    <ul>
                        {tagNews.map((item, index) => (
                            <li key={index}>
                                <NavLink to={`/news?q=${item.toLowerCase()}`}>
                                    <button
                                        onClick={ () => {handleOnClickTag(item)} } 
                                        className={"relative text-color-text-news opacity-70 translate-y-3 text-lg font-bold px-3 py-1 hover:text-red-500 animate-dropDown animate-transformText"}
                                    >{item}</button>
                                </NavLink>
                            </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
     );
}

export default NewsFilter;