import SingleResult from "./singleResult";

const ResultDetails = (props) =>{
    return(
        <div>
            <h2 className="text-center py-5 text-2xl font-bold dark:text-white">Results</h2>
            {/* <div className="flex justify-center items-center">
                <div className="inline-block px-20 pb-10">1st<p>{props.items[0].drivers.forename} {props.items[0].drivers.surname}</p></div>
                <div className="inline-block px-20 pb-10">2nd<p>{props.items[1].drivers.forename} {props.items[1].drivers.surname}</p></div>
                <div className="inline-block px-20 pb-10">3rd<p>{props.items[2].drivers.forename} {props.items[2].drivers.surname}</p></div>
            </div> */}
            <div className="grid grid-cols-5 gap-4 ">
                <div className="font-bold">Position</div>
                <div className="font-bold">Driver</div>
                <div className="font-bold">Constructor</div>
                <div className="font-bold">Laps</div>
                <div className="font-bold">Points</div>
                {props.items.map(result => <SingleResult item={result} key={result.resultId}/>)}
            </div>
        </div>
    )
}

export default ResultDetails;