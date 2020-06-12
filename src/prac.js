import React, { useState } from "react";

const Prac = () => {

  const [names ,setnames] = useState({

        first : ""
  })
  
// const One = () =>{

//    if(names.first === "sohail"){
//      alert("Found Match");
//    }else{
//      alert("Not Found")
//    }

// }

const handle = (event) => {

   setnames({
     first : event.target.value
   })
}

  const Swi = () =>{

        const mm = names.first;
        switch(mm){
          case  "88" :
            console.log("ok");
            break;

            default :
            console.log("not ok")
        }
  };

  return(
    <React.Fragment>
      <input type="text" value={names.first} onChange={handle} onBlur={Swi} />
{/* <button onClick={One}>press</button> */}
<br />
<h1>This code is working</h1>
    </React.Fragment>
  )
}

export default Prac;