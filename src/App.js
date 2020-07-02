import React, {useState} from 'react';
//import ReactDOM from 'react-dom';


import WeatherCard from './components/WeatherCard/Weather_card';
import './App.css';



function App() {

  var temp = Math.floor(Math.random() * 60) - 20;
  let element = <WeatherCard temp={temp}/>;

  const [test, setTest] = useState(element);

  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([
    element
  ])

  const shoot = () => {
    setCount(count + 1);
    var temp = Math.floor(Math.random() * 60) - 20;
    setCards(cards + <WeatherCard temp={temp}/>);
  }

   
  return (
    <div className="App"> 
    
    <h1>Count = <div id="count">{count}</div></h1>
    <button onClick={() => shoot()}>Add a Weather Card</button>
  {cards.map(card => (
    <li>{card}</li>
  ))}
  {test}

    </div>
    
  );
}


export default App;





