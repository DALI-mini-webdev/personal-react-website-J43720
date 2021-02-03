import React from 'react';
import img from './img/yellow flowers.png';
import pic from './img/ladd library.JPG';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  const name = "Jasmine"
  const onChangeFunction = (event) => {
    console.log(event.target.value);
  }
 
  const buttonFunction = () => {
    console.log("button was clicked");
  }
  const favoritefoodsList = ["pizza, fried rice, french fires, Sour Patch Kids"];
  const favoritefoodsMap = favoritefoodsList.map((favoritefood) => {
    return(
      <p>My favorite foods are {favoritefood}</p>
    )
  });
 
 
  return(
    
  
    <div className = "App">
      <Navbar /> 
      <h1>HELLO</h1>
      <h3>my name is {name}</h3>
      <header className="App-header">
      <div className = "ordered list">
      <h5>Snippets of my life:</h5>
          <ul className = "bold">
            <li>I enjoy learning chemistry</li>
            <li>Extremely invested in pop, classical, and folk music</li>
            <li>love to sit at home and eat</li>
          </ul>
          <button onClick={buttonFunction}>click just for fun</button>
        <div className = "foods">{favoritefoodsMap}</div>
        <div>
          <a
            className = "link"
            href = "https://www.w3schools.com/tags/tag_center.asp"
            target = "_blank"
            rel="noopener noreferrer"
          >Learn HTML
          </a>
        </div> 
        <div>
          <a
            className = "link"
            href = "https://stackoverflow.com/"
            target = "_blank"
            rel="noopener noreferrer"
          >stackoverflow
          </a> 
        </div>
        <div>
          <a
            className = "link"
            href = "https://www.google.com/"
            target = "_blank"
            rel="noopener noreferrer"
          >images
          </a> 
        </div>  
      </div> 
      <div className = "image">
        <img src={img} width="400" height="600" className="App-logo" alt="logo"/> 
          <div>
            <input type = "text" onChange={onChangeFunction} placeholder="Type something interesting?"/>
          </div> 
      </div>
      <div className = "secondimg">
        <img src={pic} width="500" height="400" className = "second App-logo" alt="secondlogo"/>
        <p>And here's my favorite picture taken at Bates</p>
      </div>

  
        
       
       
      

      </header>
    </div>
  );
}

 
export default App;

