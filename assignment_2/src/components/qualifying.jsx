import SingleQualify from "./singleQualify";
const Qualifying = (props) => {
    return(
        <div>
            <h2 className="text-center py-5 text-2xl font-bold dark:text-white">Qualifying</h2>
            <div className="grid grid-cols-6 gap-4 ">
                <div className="font-bold">Position</div>
                <div className="font-bold">Driver</div>
                <div className="font-bold">Constructor</div>
                <div className="font-bold">Q1</div>
                <div className="font-bold">Q2</div>
                <div className="font-bold">Q3</div>
                {props.items.map(qualify => <SingleQualify item={qualify} key={qualify.qualifyId}/>)}
            </div>
        </div>
    )
}

export default Qualifying;