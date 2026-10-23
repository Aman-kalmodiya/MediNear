import React, { useState } from 'react'
import {createContext,useEffect} from 'react'
export const DoctorsContext = createContext()
const DoctorsData = ({children}) => {
    const [doctors, setDoctors] = useState([]);

    const URL = "https://api.npoint.io/ca2afc03a86f6ad3944b";
    useEffect(() =>{
      const fetchData = async ()=>{
        const resp = await fetch(URL);
        const result = await resp.json();
        setDoctors(result)
      }
      fetchData();
    },[])
  return (
    <DoctorsContext.Provider value={{doctors}}>
      {children}
    </DoctorsContext.Provider>
  )
}
export default DoctorsData
