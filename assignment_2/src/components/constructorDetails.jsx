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

    return(
        <DriverConstructorModal content={constructorDetails} header={'Constructor Details'} image={''}/>
    )
}

export default ConstructorDetails;