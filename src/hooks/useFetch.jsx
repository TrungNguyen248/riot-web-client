import axios from "axios";


async function useFetch(url) {
    try{
        
        const result = await axios.get(url)
            return result.data
    } catch(err) {
        console.log(err)
    }


}

export default useFetch;