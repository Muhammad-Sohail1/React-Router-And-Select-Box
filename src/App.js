import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Prac from "./prac";
import {BrowserRouter ,Route,Link,Switch,NavLink} from "react-router-dom";
// import {Link} from "react-router-dom";

const App = () => {

  const [name ,setname] = useState(0)


  const O = () => {

      setname(name + 1)
  }

// const P = () => {
//   setname(name -1)
// }
  return(
    <React.Fragment>           
    
      <BrowserRouter>
      <ul>
        <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/About">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/Contact">Contact</NavLink></li>
        </ul>  
        <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="**" component={_404} />
    </Switch>
    </BrowserRouter>
    <br />
    <div>
      <button onClick={O} >Press</button>
      <button onClick={() => setname(name -1)}>Decress</button>
      <br />
      
      {name}
    </div>
    </React.Fragment>

  )
}
const Home = () =>{

  return(
    <div>
      <h1>Wellcome Home Page</h1>
    </div>
  )
}

export default App;



const About = () =>{


  return(
    <div>
      <h1>Wellcome About Page</h1>
    </div>
  )
}

const Contact = () => {

  return(
    <div>
      <h1>Wellcome Contact Page</h1>
    </div>
  )
}

const _404 = () =>{

  return(
    <div>
      <h1>404 Error</h1>
    </div>
  )
}