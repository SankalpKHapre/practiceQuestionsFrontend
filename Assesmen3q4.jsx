// 4.This React code snippet that uses multiple 
// useStates (loading/data/error/query etc.).
//  Please refactor it to use useReducer.
//  Also tell me where you would write the reducer 
// function and why

import React, { useEffect, useReducer, useState } from "react";
export default function TodoSearchPage() {
const initialState ={
    query:'',
    page:1,
    data:[],
    loading:false,
    error:""
}

function reducer(state,action){
    switch(action.type){
        case "set_query": return({...state,query:action.payload})
        case "set_page" : return({...state,page:action.payload})
        case "fetch_start" : return({...state,loading:true,error:""})
        case "fetch_success": return({...state,data:action.payload,loading:false})
        case "fetch_error":return({...state,error:action.payload,loading:false})
        default: return state
        
    }
}
const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(() => {
    let cancelled = false;
    async function fetchTodos() {
      try {
        dispatch({type:"fetch_start"})
        const res = await fetch(`/api/todos?q=${encodeURIComponent(state.query)}&page=${state.page}`);
        const json = await res.json();
        if (!cancelled) (dispatch({type:"fetch_success",payload:json.todos ?? []}));
      } catch (e) {
        if (!cancelled) dispatch({type:"fetch_error",payload:e?.message || "Failed to fetch"});
      } 
    }
    fetchTodos();
    return () => { cancelled = true; };
  }, [state.query, state.page]);

  return (
    <div>
      <input
        value={state.query}
        onChange={(e) => dispatch({type:"set_query",payload:e.target.value})}
        placeholder="Search todos"
      />
      <button onClick={() => dispatch({type:"set_page",payload:state.page+1})}>Next Page</button>

      {state.loading && <p>Loading…</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <ul>
        {state.data.map(t => <li key={t.id}>{t.todo}</li>)}
      </ul>
    </div>
  );
}