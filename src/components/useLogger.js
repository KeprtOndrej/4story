import {useEffect} from "react";

/**
 *  When variable changes, print actual value
 *
 * @param {string} description console identifier
 * @param {*} value
 */
export default function useLogger(description,value){
    useEffect(() => {
        console.log(description,value)
    },[description,value])
}