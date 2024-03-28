import { useState, useEffect } from 'react'
import Results from './components/results.jsx'
import './App.css'
import About from './components/about.jsx';
import Standings from './components/standings.jsx';
import DriverDetails from './components/driverDetails.jsx';
import ConstructorDetails from './components/constructorDetails.jsx';
import CircuitDetails from './components/circuitDetails.jsx';

import Header from './components/header.jsx';



// import { createClient } from "@supabase/supabase-js";

// const supaUrl = 'https://yuprihcjxllmezloeagx.supabase.co';
// const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cHJpaGNqeGxsbWV6bG9lYWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MzUwNjAsImV4cCI6MjAyMjQxMTA2MH0.C4Y9BobiJWXseMIw-UfWUD_HinPN2RqwuWN_uwKK0Yk';

// const supabase = createClient(supaUrl, supaAnonKey);


function App() {
  const [currentRace, setRace] = useState([]);
  useEffect( () => {
    let url = `https://lucky-clean-ogre.glitch.me/api/races/1106`;
    fetch(url)
    .then( resp => resp.json() )
    .then( data =>{
      setRace(data[0])})
    .catch( err => console.error(err));
    
},[]);

// useEffect( () => {
//   getRace();
//   }, []);

//   async function getRace() {
//     const { data } = await supabase.from('races')
//     .select(`
//     raceId, year, round, circuits (name,location,country), name, date, time, url, fp1_date, fp1_time, fp2_date, fp2_time, fp3_date, fp3_time, quali_date, quali_time, sprint_date, sprint_time`)
//     .eq('raceId', 1106);
//     setRace(data[0]);
//   }


  return (
   
      <>
      {/* <About/> */}
      {/* <Standings race={currentRace}/> */}
      {/* <Results race={currentRace}/> */}
      {/* <Results race={currentRace}/> */}
      {/* <DriverDetails driver={'norris'}/>
      <DriverDetails driver={'hamilton'}/>
      <ConstructorDetails constructor={'ferrari'}/> */}
      {/* <CircuitDetails circuit={'monza'}/> */}

      <Header/>
      </>
    )
}

export default App
