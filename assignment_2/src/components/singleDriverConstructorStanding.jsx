
const SingleDriverConstructorStanding = (props) =>{

    let name = '';
    if (props.type == 'drivers'){
        name = props.item.drivers.forename +' '+ props.item.drivers.surname;
    }
    else{
        name = props.item.constructors.name;
    } 
    return(
        <>
            <div>{props.item.position}</div>
            <div>{name}</div>
            <div>{props.item.points}</div>
            <div>{props.item.wins}</div>
        </>      
    )
}

export default SingleDriverConstructorStanding;