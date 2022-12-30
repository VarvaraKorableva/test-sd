import React from 'react'
import './HelpAndInf.css'

function HelpAndInf() {

  return (
    <div className='help-and-inf__wrapper'>
        <ul className='help-and-inf__wrapper-ul'>
          <li className='help-and-inf__container'> 
            <div className='help-and-inf__img-general help-and-inf__qustion-mark'></div>
            <a className='help-and-inf__link' href="#" target='blank'>Помощь</a>
          </li>
          <li className='help-and-inf__container'>
            <div className='help-and-inf__img-general help-and-inf__logoicon'></div>
            <a className='help-and-inf__link' href="#" target='blank'>О нас</a>
          </li>
          <li className='help-and-inf__container'>
            <div className='help-and-inf__img-general help-and-inf__flag'></div>
            <a className='help-and-inf__link' href="#" target='blank'>Русский</a>
            <div className='help-and-inf__choose-language-arrow'></div>
          </li>
        </ul>
    </div> 
  ) 
}

export default HelpAndInf;