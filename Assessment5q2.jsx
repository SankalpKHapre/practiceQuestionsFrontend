// Create a counter that cannot go below 0 and disables increment when the value reaches 10.
export default function Counter() {
  // TODO: implement
const [counter,setCounter] = useState(0)
const handleCountInc = ()=>{
setCounter(counter+1);
}
const handleCountDec = ()=>{
setCounter(counter-1);
}


  return (
    <div>
        <div>{counter}</div>
        <button disabled={counter>=10} onClick={handleCountInc}>Increment</button>
	    <button disabled={counter<=0}  onClick={handleCountDec}>Decrement</button>
        
    </div>);
}
