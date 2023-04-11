import { NavLink } from "react-router-dom";
import { explore_hero_bg } from "../../assets/images";
import useFetch from "../../hooks/useFetch"
import { useState, useEffect } from "react";


function NewsFilter({children, tagNews}) {
    let [filterNew, setFilterNew] = useState([])
    const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

    useEffect(() =>{
        useFetch(`${VITE_REACT_APP_BASE_URL}/news?q=news`)
        .then((filterData) => {
            console.log(filterData)
            setFilterNew(filterData)
            console.log(filterNew)
        })
        .catch((err) => {
            console.log(err)
        })   
    },[])

    return ( 
        <>
            <div>{filterNew.map((item,index) => (
                <p key={index}>{item.title}</p>
            ))}</div>
            <div className={"fixed w-screen h-screen top-0 z-100 overflow-hidden animate-dropDownFilterNews"}>
                <img className={""} src={explore_hero_bg}/>
                {/* button close */}{children}
                <div className={"absolute w-full flex top-1/2 -translate-y-1/2 px-40"}>
                    <span className={"text-color-text-tag-news text-xl font-bold mr-4"}>Filter by</span>
                    <ul>
                        {tagNews.map((item, index) => (
                            <li key={index}>
                                <NavLink to={`/news/tag?q=${item.toLowerCase()}`}>
                                    <button 
                                        className={"relative text-color-text-news opacity-70 translate-y-5 text-lg font-bold px-3 py-1 after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-white after:w-0 after:hover:w-full  animate-dropDown animate-transformText"}
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