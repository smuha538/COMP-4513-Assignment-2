import { useState, useEffect } from 'react'
import Results from './components/results.jsx'
import './App.css'

function App() {

//   const [currentRace, setRace] = useState([]);
//   useEffect( () => {
//     let url = `https://lucky-clean-ogre.glitch.me/api/races/1034`;
//     fetch(url)
//     .then( resp => resp.json() )
//     .then( data =>{
//       console.log(data)
//       setRace(data[0])})
//     .catch( err => console.error(err));
    
// },[]);

  return (
    <Results race={1106}/>
    )
}

export default App
