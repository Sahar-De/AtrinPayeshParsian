"use client"

import serviceData from '../service.json';
import { createContext, useContext, useEffect, useState } from 'react';

const Scontext=createContext();

export const ServiceProvider = ({children}) => {
    useEffect(()=>{
        setValue(serviceData)

    },[])
  
    const [value, setValue] = useState([]);

    setValue(serviceData);

    return (  
        <Scontext.Provider value={{ value}}>  
          {children}  
        </Scontext.Provider>  
      );
  
}

export const useServiceContext=()=>{ return useContext(Scontext); }