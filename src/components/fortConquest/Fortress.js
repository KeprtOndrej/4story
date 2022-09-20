import {useState, useRef} from "react";
import {timeNumToString, minutesToMiliseconds} from "../../commonFunctions";
import Button from "../common/Button";
import Countdown, {zeroPad} from 'react-countdown';

const minuteDifference = 10;

const  countDownRenderer = ({minutes, seconds}) => {
    return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
};


export default function Fortress(props){
    let timeInputRef = useRef();

    const [fort, setFort] = useState({
        country: 'Valorian',
        lastMod: Date.now(),
        status: "Peace",
        timeOutID: null,
    })

    const handleConquer = function(fort) {
        if(fort.timeOutID){
            clearTimeout(fort.timeOutID);
        } else {
            console.log("Mazej")
        }

        let timeOutID = null;
        let now = new Date();
        const inputTime = timeInputRef?.current?.value;
        console.log(inputTime,"HANDLER",fort);
        if(inputTime){
            now.setMinutes(inputTime);
            now.setSeconds(0);
            timeInputRef.current.value = null;
        }
        now = now.getTime();
        const timeOutTime = now + minutesToMiliseconds(minuteDifference);

        switch (fort.country){
            case "Valorian":
                console.log("case Valo")
                 timeOutID = setTimeout(() => {
                    setFort({
                        country: "Derion",
                        lastMod: timeOutTime,
                        status: "Defend",
                        timeOutID: null
                    })
                }, minutesToMiliseconds(minuteDifference)) ;
                setFort({
                    country: "Derion",
                    lastMod: now,
                    status: "Peace",
                    timeOutID: timeOutID,
                    countdownTime: timeOutTime,
                });
            break;
            case "Derion":
                timeOutID = setTimeout(() => {
                    setFort({
                        country: "Valorian",
                        lastMod: timeOutTime,
                        status: "Attack",
                        timeOutID: null,
                    })
                }, minutesToMiliseconds(minuteDifference));
                setFort({
                    country: "Valorian",
                    lastMod: now,
                    status: "Peace",
                    timeOutID: timeOutID,
                    countdownTime: timeOutTime,
                });
            break;
            default:
        }
    }
    return (
        <div className={"fort"}>
            <div className={"fortStatus"}>
                {fort.status}
            </div>

            <div className={"countDown"}>
                <Countdown
                    date={fort.countdownTime  ?? fort.lastMod}
                    key={fort.countdownTime ?? fort.lastMod}
                    renderer={countDownRenderer}
                />
            </div>
            <div className={"fortCountry"}>
                {fort.country}
            </div>
            <div className={"fortName"}>
                {props.name}
            </div>
            <div className={'timer'}>
                {timeNumToString(fort.lastMod)}
            </div>
            <div className={"minuteInput"}>
                <input ref={timeInputRef} type="number"/>
            </div>
            <div>

            </div>
            <Button text={"Change"} onClick={() => handleConquer(fort)}/>
        </div>
    )
}