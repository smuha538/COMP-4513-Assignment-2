import SingleDriverConstructorStanding from "./singleDriverConstructorStanding";

const DriverConstructorStandingsColumn = (props) => {
    return(
        <div>
            <h2 className="text-center py-5 text-2xl font-bold dark:text-white">{props.attributeName}</h2>
            <div className="grid grid-cols-4 gap-4 ">
                <div className="font-bold">Position</div>
                <div className="font-bold">{props.attributeName}</div>
                <div className="font-bold">Points</div>
                <div className="font-bold">Wins</div>
                {props.items.map(standing => <SingleDriverConstructorStanding item={standing} key={standing.driverStandingsId || standing.constructorStandingsId} type={props.type}/>)}
            </div>
        </div>
    )
}

export default DriverConstructorStandingsColumn;