import React, { useState } from "react";



export function Practice(){


    function Ok(e){
        e.preventDefault();

        const getid = document.getElementById("selectbox");
        const texts = getid.options[getid.selectedIndex].text;
        console.log(texts)
    }


  const [name,setname] = useState({
      firstname : "sohail"
  });

const handle = (event) => {
console.log(event.target.value)
    setname({
        firstname : event.target.value
    })

}

    return(
<React.Fragment>
    <div>
        <input type="text" value={name.firstname} onChange={handle} />
    </div>
    <form>
    <select id="selectbox">
        <option value="volvo">Nearest Office</option>
        <option value="saab">DHA</option>
        <option value="opel">KDA</option>
        <option value="audi">KARSAZ</option>
    </select>
    <button onClick={Ok}>Submit</button>
    </form>
</React.Fragment>

    )
}













