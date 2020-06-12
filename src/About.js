import React, { useState, useEffect } from "react";
import {Messag} from "./Message"
import './App.css';


function Work(){

    const [name,setname] = useState(0);
    const [isMorning,setMorning] = useState(true);

    // const sets = () =>{

    //     setname(name);
    // }

    useEffect(()=>{

        console.log("ok ")
        document.title = + name
    });


    return(
        <React.Fragment>
            
            <div className={`box ${isMorning ? "daylight" : "" }`} >
    <h1>Good {isMorning ? " Morning" : " Night"} </h1>
    <br />
    <button onClick={() => setMorning(!isMorning)}>Update Day</button>
            </div>
            
            
            <div>                
<br />
  <h1> <Messag counter={name} /></h1>  
                <br />
        <button onClick={() =>{setname(name+1);
}}>Increment</button>

        &nbsp;<button onClick={()=> setname(name - 1)}>Decrement</button> 
            </div>
        </React.Fragment>
    )
}
export default Work;