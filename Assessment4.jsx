// Frontend Interview Task: Search & Highlight
// Implement a search function for an unordered list of sentences. When a user enters a keyword, return only the sentences containing that keyword (case-insensitive) and highlight the matched portions in red by wrapping them in an HTML span (e.g., <span style="color: red;">keyword</span>).
// Sample Data

import { useState } from "react";

// Test Keywords
// apple blue cat 
// Expected Output — keyword: 'apple'
// I have an apple in my bag.
// Bananas are yellow and apples can be red or green.
// Pineapple juice is tasty.
// Expected Output — keyword: 'blue'
// Grapes and blueberries make a great smoothie.
// Blue is a calming color.
// Expected Output — keyword: 'cat'
// An application of this method is indexing.
// A catalog can categorize items efficiently.
// My cat loves to nap on the balcony.
// Concatenate these strings to form a sentence.
// Generative Snapshots

export default function App(){
    
    const sentences = [
      "I have an apple in my bag.",
      "Bananas are yellow and apples can be red or green.",
      "Pineapple juice is tasty.",
      "The quick brown fox jumps over the lazy dog.",
      "An application of this method is indexing.",
      "Grapes and blueberries make a great smoothie.",
      "Blue is a calming color.",
      "A catalog can categorize items efficiently.",
      "My cat loves to nap on the balcony.",
      "Concatenate these strings to form a sentence.",
    ];
     
    const [search,setSearch] = useState("")
    
    
        const regex= new RegExp(`(${search})`,'gi');
        const filteredList = sentences.filter((data)=> (data.toLowerCase().includes(search.toLowerCase())))
        const highlight = filteredList.map((data)=>data.replace(regex,'<span style="color:red;">$1</span>'))


    

    return(
        <div>
            <input type="text" name="search" id="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <ul>
                {search?highlight.map((data,idx)=><li key={idx} dangerouslySetInnerHTML={{__html:data}}></li>):sentences.map((data)=><li>{data}</li>)}
            </ul>
        </div>


    )
}
 

 

 
