const RaceResultDetails = (props) =>
{
    return(
        <div>
            <div className="inline-block px-6">Name: {props.race.name}</div>
            <div className="inline-block px-6">Round: {props.race.round}</div>
            <div className="inline-block px-6">Year: {props.race.year}</div>
            <div className="inline-block px-6">Circuit: {props.race.circuits.name}</div>
            <div className="inline-block px-6">Date: {props.race.date}</div>
            <div className="inline-block px-6">URL: {props.race.url}</div>
            {/* <div className="inline-block px-10">
                <button onClick={hide}>{buttonText}</button>
            </div> */}
        </div>
    )
}

export default RaceResultDetails;