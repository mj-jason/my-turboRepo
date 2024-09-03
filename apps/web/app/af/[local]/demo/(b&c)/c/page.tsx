"use client";
import { useState } from 'react';
import Center from "./center";
import Bottom from "./bottom";

export default () => {
    const [state, setState] = useState([1, 2]);
    const [flag, setFlag] = useState(0);
    
    const onPush = (val: number) => {
        setState(state => ([...state, val]))
    }

    const onFocus = () => {
        setFlag(flag+1);
    }

    return (
        <div>
            <p>{state.join(",")}</p>
            <Center flag={flag}/>
            <Bottom onPush={onPush} onFocus={onFocus}/>
        </div>
        
    )
}