import React,{useState} from 'react'
const FunCounter =()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
            <button type="button" onClick={()=>
            setCount(count+1)}><h1>+</h1></button>
            &nbsp;&nbsp;{count}&nbsp;&nbsp;
            <button type="button" onClick={()=>
            setCount(count-1)}><h1>- </h1></button>

        </div>
    )
};
export default FunCounter;