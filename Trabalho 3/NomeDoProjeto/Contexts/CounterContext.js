import React from 'react';
import {useState, createContext, useContext} from 'react'


export const CounterContext = createContext();

export const CounterProvider = ({children})=>{
       const [counter, setCounter] = useState(0);

    return(
        <CounterContext.Provider value={{counter,setCounter}}>{children}</CounterContext.Provider>
    );
}