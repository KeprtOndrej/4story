import Fortress from "./Fortress";

export default function WarRegion(props){
    let renderFortresses = [];
    let fortKey = 0;
    for (const fortress of props.fortresses){
        renderFortresses.push(<Fortress name={fortress} key={`fort_key_${fortKey++}`}/>)
    }
    return (
        <div className={"fortList"}>
            <h3>{props.name}</h3>
            {renderFortresses}
        </div>
    )
}