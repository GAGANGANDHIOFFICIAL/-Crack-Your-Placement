import { useState } from "react";

export default function counter(){
   
   let [count ,setCount]=useState(0);

   let inccount=()=>{
   setCount(count+1);
   console.log(count)
   }
   
  
    return(
        <>
        <h3>count ={count} </h3>
        <button onClick={inccount}>increase-count </button>
        </>
    );
}