import React from "react";

const DatoGlobalContext = React.createContext({
     listFaves:[],
     updatelistFaves: (id)=> null
    }); 
export const DatoGlobalContextProvider =DatoGlobalContext.Provider

export default DatoGlobalContext
