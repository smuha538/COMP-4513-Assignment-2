import Qualifying from "./qualifying";
import ResultDetails from "./resultDetails";
import {useState, useEffect} from 'react'


const Results = (props) => {
    const [buttonText, setText] = useState('Show Results');
    const [isActive, setActive] = useState(false);
    const [results, setResults] = useState([]);
    const [qualify, setQualify] = useState([]);

    const hide = () =>{
        const newButtonText = changeButtonText(buttonText);
        setText(newButtonText);
        setActive(!isActive);
    }

    const changeButtonText = (currentText)  =>{
        return currentText == "Show Results" ? "Show Qualifying" : "Show Results"
    }

    const sortPositionAscending = (data, url) =>{
        // console.log(data)
        // console.log(url)
        return data.sort(({ position: a }, { position: b }) => (a === null) - (b === null) || a - b)
    }

    useEffect( () => {
            let url = `https://lucky-clean-ogre.glitch.me/api/results/${props.race.raceId}`;
            // console.log(props.race.raceId)
            fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                const sortedData = sortPositionAscending(data, url);
                setResults(sortedData)})
            .catch( err => console.error(err));

            url = `https://lucky-clean-ogre.glitch.me/api/qualifying/${props.race.raceId}`;
            
            fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                const sortedData = sortPositionAscending(data);
                setQualify(sortedData)})
            .catch( err => console.error(err));
            
        },[props.race.raceId]);

    return(
    <div className=" ">
        <h1 className="text-4xl font-bold text-yellow-600 m-4 text-center py-10">Results</h1>
        <div>
            {/* <div className="inline-block px-6">Name: {props.race.name}</div>
            <div className="inline-block px-6">Round: {props.race.round}</div>
            <div className="inline-block px-6">Year: {props.race.year}</div>
            <div className="inline-block px-6">Circuit: {props.race.circuits.name}</div>
            <div className="inline-block px-6">Date: {props.race.date}</div>
            <div className="inline-block px-6">URL: {props.race.url}</div>
            <div className="inline-block px-10">
                <button onClick={hide}>{buttonText}</button>
            </div> */}
        </div>
        <div className={isActive ? 'hidden': null}>
            <Qualifying items={qualify}/>
        </div>
        <div className={isActive ? null : 'hidden'}> 
            <ResultDetails items={results}/>
        </div>

    </div>
    );
}

export default Results;