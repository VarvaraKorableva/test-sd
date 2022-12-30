import React from 'react'
import './Requests.css'

function Requests() {

  return (
    <div className='requests__wrapper'>
      <p className='requests__title'>Запросы</p>
        <ul className='requests__wrapper-ul'>
          <li className='requests__container'> 
            <div className='requests__arrow-general requests__arrow-down'></div>
            <a className='requests__link' href="#" target='blank'>Входящие</a>
          </li>
          <li className='requests__container'>
            <div className='requests__arrow-general requests__arrow-up'></div>
            <a className='requests__link' href="#" target='blank'>Исходящие</a>
          </li>
        </ul>
    </div> 
  ) 
}

export default Requests;