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

    const sortPositionAscending = (data) =>{
        return data.sort(({ position: a }, { position: b }) => (a === null) - (b === null) || a - b)
    }

    useEffect( () => {
            let url = `https://lucky-clean-ogre.glitch.me/api/results/${props.race}`;
            fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                const sortedData = sortPositionAscending(data);
                console.log(sortedData)
                setResults(sortedData)})
            .catch( err => console.error(err));

            url = `https://lucky-clean-ogre.glitch.me/api/qualifying/${props.race}`;
            
            fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                const sortedData = sortPositionAscending(data);
                setQualify(sortedData)})
            .catch( err => console.error(err));
            
        },[props.race]);

    return(
    <div className=" ">
        <h1 className="text-4xl font-bold text-yellow-600 m-4 text-center py-10">Results</h1>
        <div>
            <div className="inline-block px-6">Race name</div>
            <div className="inline-block px-6">Round 1</div>
            <div className="inline-block px-6">Year</div>
            <div className="inline-block px-6">Circuit Name</div>
            <div className="inline-block px-6">Date</div>
            <div className="inline-block px-6">URL</div>
            <div className="inline-block px-10">
                <button onClick={hide}>{buttonText}</button>
            </div>
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