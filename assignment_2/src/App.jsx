import { useState, useEffect } from 'react'
import Results from './components/results.jsx'
import './App.css'

function App() {

  const [currentRace, setRace] = useState([]);
  useEffect( () => {
    let url = `https://lucky-clean-ogre.glitch.me/api/races/1107`;
    fetch(url)
    .then( resp => resp.json() )
    .then( data =>{
      console.log(data[0])
      setRace(data[0])})
    .catch( err => console.error(err));
    
},[]);

  return (
    <Results race={currentRace}/>
    )
}

export default App
