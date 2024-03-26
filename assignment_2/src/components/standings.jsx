import DriverConstructorStandingsColumn from './driverConstructorStandingsColumn';
import {useState, useEffect} from 'react'


const Standings = (props) => {
    const [drivers, setDrivers] = useState([]);
    const [constructors, setConstructors] = useState([]);

    const sortPositionAscending = (data) =>{
        return data.sort(({ position: a }, { position: b }) => (a === null) - (b === null) || a - b)
    }

    useEffect( () => {
            let url = `https://lucky-clean-ogre.glitch.me/api/standings/${props.race.raceId}/drivers`;
            fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                const sortedData = sortPositionAscending(data, url);
                setDrivers(sortedData)})
            .catch( err => console.error(err));

            url = `https://lucky-clean-ogre.glitch.me/api/standings/${props.race.raceId}/constructors`;
            
            fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                const sortedData = sortPositionAscending(data);
                setConstructors(sortedData)})
            .catch( err => console.error(err));
            
        },[props.race.raceId]);

    return(
    <div className=" ">
        <h1 className="text-4xl font-bold text-yellow-600 m-4 text-center py-10">Standings</h1>
        <div className='text-center'>After Round {props.race.round}</div>
        <div className='inline-block'>
            <DriverConstructorStandingsColumn items={drivers} type={'drivers'} attributeName={'Driver'}/>
        </div>
        <div className='inline-block'> 
            <DriverConstructorStandingsColumn items={constructors} type={'constuctors'} attributeName={'Constructor'}/>
        </div>
    </div>
    );
}

export default Standings;