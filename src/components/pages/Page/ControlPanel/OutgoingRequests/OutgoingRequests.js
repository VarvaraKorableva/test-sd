import React from 'react'
import './OutgoingRequests.css'


function OutgoingRequests() {

  return ( 
    <div className='outgoing-requests'>

      <div className='outgoing-requests__wrapper'>
        <p className='outgoing-requests__title'>Исходящие запросы</p>
        <div className='outgoing-requests__counter-wrapper'><span className='outgoing-requests__counter'>5</span></div>
      </div>  

      <div className='outgoing-requests__container'>
        <div className='outgoing-requests__wrapper-process-counter'>
          <p className='outgoing-requests__process-counter'>103</p>
          <p className='outgoing-requests__process'>на рассмотрении</p>
        </div>
        <div className='outgoing-requests__wrapper-executed-counter'>
          <p className='outgoing-requests__executed-counter'>23</p>
          <p className='outgoing-requests__executed'>исполнено</p>
        </div>
      </div>
      <div className='outgoing-requests__img'></div>
    </div>
      
  ) 
}

export default OutgoingRequests;