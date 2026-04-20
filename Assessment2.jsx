// REACT ASSESSMENT - 2
// Time: 20 minutes
// Question:
// Given an API returning a list of todos, we want to display the
//  list in a performant way.
// Functional requirements:
// • Initially display the first 20 todos
// • On the top of the page, display the total number of loaded todos
// • Display a "Load More" button 
// o Every click fetches and displays 20 more
// • When total loaded todos reaches 100, hide "Load More" button
// API Endpoint:
// https://dummyjson.com/todos?limit=20&skip=0
// • You may change skip and limit to load new todos.
// API response structure:
// JSON
// {
// "todos": [
// {
// "id": 1,
// "todo": "Do something nice for someone I care about",
// "completed": true,
// "userId": 26
// }

import {useState, useEffect } from "react";

export default function App(params) {
    
    const [data,setData] = useState([]);
    const [limit,setLimit] =useState(20)
    useEffect(()=>{
        async function apiCall(){
            const apiResponse = await fetch(`https://dummyjson.com/todos?limit=${limit}&skip=0`)
            const fetch = await apiResponse.json()
            setData(fetch);

        }
        apiCall()
    },[limit])

    const loadMore = ()=>{
        setLimit(prev=>prev+20)
    }

    return(
        <div>
            <div>{data.todos.length}</div>
            <table>
                <tbody>
                    {data.todos.map((objs)=>{
                        return(
                        <tr key={objs.id}>
                            <td>{objs.id}</td>
                            <td>{objs.todo}</td>
                        </tr>
                        )

                    })}

                </tbody>

            </table>

            <button disabled={limit<=100} onClick={loadMore}>Loadmore</button>
        </div>

    )

}