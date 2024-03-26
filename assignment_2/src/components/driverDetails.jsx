import DriverConstructorModal from './driverConstructorModal'
import { useState, useEffect } from 'react'


const DriverDetails = (props) =>
{
    const [driverDetails, setDriverDetails] = useState([]);
    useEffect( () => {
        let url = `https://lucky-clean-ogre.glitch.me/api/drivers/${props.driver}`;
        fetch(url)
        .then( resp => resp.json() )
        .then( data =>{
        setDriverDetails(data[0])})
        .catch( err => console.error(err));
        
    },[props.driver]);

    return(
        <DriverConstructorModal content={driverDetails} header={'Driver Details'} image={''}/>
    )
}

export default DriverDetails;