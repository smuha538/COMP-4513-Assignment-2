import DriverConstructorModal from './driverConstructorModal'
import { useState, useEffect } from 'react'


const ConstructorDetails = (props) =>
{
    const [constructorDetails, setConstructorDetails] = useState([]);
    useEffect( () => {
        let url = `https://lucky-clean-ogre.glitch.me/api/constructors/${props.constructor}`;
        fetch(url)
        .then( resp => resp.json() )
        .then( data =>{
            setConstructorDetails(data[0])})
        .catch( err => console.error(err));
        
    },[props.constructor]);

    const details = `Name: ${constructorDetails.name}, Nationality: ${constructorDetails.nationality}, URL:  ${constructorDetails.url}`;

    return(
        <DriverConstructorModal content={details} header={'Constructor Details'} image={''}/>
    )
}

export default ConstructorDetails;