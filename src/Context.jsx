import React, { useState } from "react";
import { createContext } from "react";

const myContext = createContext();


const DataProvider = ({children}) =>{

    const [data, setData] = useState([]);

    const addInputData = (text , number) =>{
        setData ([...data,{text,number}])
    }

  

    return (
        <myContext.Provider value={{data ,addInputData }}>
            {children}
        </myContext.Provider>
    )
}

export {DataProvider , myContext}