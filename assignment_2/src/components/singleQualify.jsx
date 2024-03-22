const SingleQualify = (props) =>{

    return(
        <>
            <div>{props.item.position}</div>
            <div>{props.item.drivers.forename} {props.item.drivers.surname}</div>
            <div>{props.item.constructors.name}</div>
            <div>{props.item.q1}</div>
            <div>{props.item.q2}</div>
            <div>{props.item.q3}</div>
        </>      
    )
}

export default SingleQualify;