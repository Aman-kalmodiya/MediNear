import React, { useContext, useState } from 'react'
import { DoctorsContext } from './context/DoctorsData'
import './Ui.css'
function Ui() {
    const {doctors} = useContext(DoctorsContext);
    const [page,setPage]=useState(1);
    const totalPages = 6;
    const currentDr = doctors.slice((page-1)*totalPages,page*totalPages);
    const setPrev = ()=>{
      if(page>1){
        setPage(page-1)
      }
    }
  return ( 
    <div> 
      <div className='container'> 
        {
            currentDr.map((doc)=>(
                <div className='main-div'>
                <div className=''>
                
                <h2> Name :{doc.dr_name}</h2>
                <h3> Specification:{doc.specification}</h3>
                <h3> Hospital: {doc.hospital}</h3>
              
                </div>
                </div>
                
            ))
        }
      
      </div>
     <div style={{display:'flex',alignItems:"center",justifyContent:"center",marginTop:'10px'}}>
          <button className='button'
          onClick={setPrev}
          > prev</button>
        <span className='span'>{page}</span>
        <button className='button'
         onClick={()=>{setPage(page+1)}}
        > Next</button>
      </div>
    </div>
  )
}

export default Ui
