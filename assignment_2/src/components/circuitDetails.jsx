import CircuitModal from './circuitModal'
import { useState, useEffect } from 'react'


const CircuitDetails = (props) =>
{
    const [circuitDetails, setCircuitDetails] = useState([]);
    useEffect( () => {
        let url = `https://lucky-clean-ogre.glitch.me/api/circuits/${props.circuit}`;
        fetch(url)
        .then( resp => resp.json() )
        .then( data =>{
            setCircuitDetails(data[0])})
        .catch( err => console.error(err));
        
    },[props.circuit]);

    const details = `Name: ${circuitDetails.name}, Location: ${circuitDetails.location}, Country: ${circuitDetails.country}, URL:  ${circuitDetails.url}`;
    return(
        <CircuitModal content={details} header={'Circuit Details'} image={''} position={[circuitDetails.lat,circuitDetails.lng]}/>
    )
}

export default CircuitDetails;