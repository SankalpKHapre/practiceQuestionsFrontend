// 3. We have a search input field where data is displayed as a list.
// There is an issue with loading data / too many calls. How do we resolve it?
// Where would you write your solution and why?
// Implement whatever you would suggest.
//For this we would use a debounce search in a useEffect setting
//the useEffec for the api call and the debounce search fto filter the data after
//the user is done inputting it in 

import { useEffect, useState } from "react"


export default function App(){

    const [debounce,setDebounce] =useState();
    const [search,setSearch] = useState();

    useEffect(()=>{
        
        const timer = setTimeout(()=>{
            setDebounce(search);
        },300)
        
        async function api(){

            const apiCall = await fetch('/mockapi');
            const response = await apiCall.json()
            //not 100% accurate code just demonstation
            const filteredData = response.filter((data)=>data.toLowerCase.includes(debounce))
            //filters data and so on
        }

        return()=> clearTimeout(timer)

    },[search])

    return(
        <div></div>
    )
}


