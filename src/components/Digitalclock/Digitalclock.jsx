import React, { useState, useEffect } from 'react'


export const Digitalclock = () => {

    const [clock, setClock] = useState();

    useEffect(()=>{
     setInterval(()=>{
      let date = new Date();
       setClock(date.toLocaleTimeString())
     }, 1000)
 }, [])
  return (
    <div className='clockContainer'>
    <h2>
    {clock}
    </h2>
    
    </div>
  )
}
