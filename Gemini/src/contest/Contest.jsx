import { createContext } from "react";
import run from "../config/gemini"

export const Context = createContext();

const ContextProvider = (prompt)=>{

   const onSent = async(prompt)=>{
     await run(prompt);
   }
onSent("Lokesh is hereee")

    const contextValue={
    }
    return 
    {


        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
       
    }

}
export default ContextProvider