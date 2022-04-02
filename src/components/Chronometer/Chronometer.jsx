import React, {useState, useEffect} from 'react'

export const Chronometer = () => {

    const [time, setTime] = useState(0);
    const [timerState, setTimerState] = useState(false);

    useEffect(()=>{
        let interval = null;

        if(timerState){
           interval = setInterval(()=>{
               setTime((prevTime) => prevTime + 10)
           }, 10)
        } else{
            clearInterval(interval)
        }

        return ()=>  clearInterval(interval)
    }, [timerState])
  return (
    <div className='chronometerContainer'>
        <div className='text-style'>
            <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
            <span>{("0" + ((time/10)%100)).slice(-2)}</span>
        </div>
        <div >

        {
        !timerState && time === 0 && (<button className='button-style'onClick={()=> setTimerState(true)}>Start</button>)
        }

        {
        timerState &&  <button className='button-style' onClick={()=> setTimerState(false)}>Stop</button>
        }
        {
         !timerState && time > 0 && (
            <button className='button-style' onClick={()=> setTimerState(true)}>Resume</button>
         )
        }
       
         { !timerState && time > 0 && ( <button className='button-style' onClick={()=> setTime(0)}>Reset</button>)}
       
        
        </div>
        
    </div>
  )
}
