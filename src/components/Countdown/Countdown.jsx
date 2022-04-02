import React, { useState, useEffect } from 'react';

export const Countdown = () => {

    const [time, setTime] = useState();

   useEffect(()=>{
      let countDownDate = new Date("May 12, 2022 13:00:00").getTime();

      let currentTime = setInterval(()=>{

        let now = new Date().getTime()

        let distance =  Math.floor(
          new Date(countDownDate - now).valueOf()/1000
        )


        let days = Math.floor(distance/ 86400);

        let hours = Math.floor((distance%86400)/3600);

        let minutes = Math.floor((distance%3600)/60)

        let seconds =   Math.floor(distance%60)

        setTime(`${days} d ${hours} h ${minutes} m ${seconds}`)

        if(distance < 0){
          clearInterval(currentTime)
        }

      }, 1000)

      return(()=>{
        
        clearInterval(currentTime)
      })
    }, [])
  return (
    <div className="countDownContainer">{time}</div>
  )
}
