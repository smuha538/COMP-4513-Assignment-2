const SingleResult = (props) =>{

    return(
        <>
            <div>{props.item.position}</div>
            <div>{props.item.drivers.forename} {props.item.drivers.surname}</div>
            <div>{props.item.constructors.name}</div>
            <div>{props.item.laps}</div>
            <div>{props.item.points}</div>
        </>      
    )
}

export default SingleResult;