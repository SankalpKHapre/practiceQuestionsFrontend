import { useState } from "react";


export default function App(){

    const users = ["Chirag", "Aman", "Riya", "Sneha", "Priya", "Arjun"];
    const [search,setSearch] = useState("")

    function searchUsers(){
        
        if (!search) {
            return users.map((data)=><li>{data}</li>)
        }

    
        const filteredList = users.filter((data)=>data.toLowerCase().includes(search))
        if (filteredList.length==0) {
            return <div>No Search Results</div>
        }
        return (filteredList.map((data)=><li>{data}</li>))
    }


return(
    <div>
        <ul>
            {searchUsers()}
        </ul>
    </div>
)

}