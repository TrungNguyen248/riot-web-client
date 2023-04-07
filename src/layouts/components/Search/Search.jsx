import { SearchIcon } from "../../../components/Icons"

function Search({placeholder_searchInput}) {
    return ( 
        <div>
            <form>
                <label className={"flex top-0"}>
                        <input 
                            className={`absolute top-6 w-48 rounded-full h-8 pl-6 text-white outline-none bg-white/0 ${placeholder_searchInput} placeholder:text-xs placeholder:font-semibold placeholder:items-center placeholder:-translate-y-0.5`}
                            placeholder="SEARCH"
                            
                        />
                        <div className={"relative"}>
                            <button className={"absolute -top-4 left-36 p-2"}>
                                <SearchIcon />
                            </button>
                        </div>
                </label>
            </form>
        </div>
     );
}

export default Search;