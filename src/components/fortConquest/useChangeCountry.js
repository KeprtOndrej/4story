import {useState} from "react";
export default function (defaultState){
    const [state, setState] = useState(defaultState);

    const date = new Date();

    if(state.derion && state.lastMod - date.now() <= 10000){

    }

    return [state, setState];
}