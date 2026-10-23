import React from 'react'
import heroPage from './HomeHero.png'
import './Home.css'
function Home() {
  return ( 
    <div >
      <div className='homeContainer'>
        <img src={heroPage} className=''/>
        <div className='secondary-div'>
            <h1 style={{textAlign:"center",opacity:"0.8",paddingTop:"15px"}}>Simplify Your Healthcare Journey</h1>

            <div className='Dr-search'>
            <input className='input' placeholder='Condition or Specific dr'></input>
            <br></br>
            <input  className='input' type="text" placeholder='Your City'/>
            <button className='Search-button'>Search</button>

</div>  
        </div>

      </div>
    </div>
  )
}

export default Home
