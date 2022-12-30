import React from 'react'
import './Header.css'
import headerLogoSber from '../../../../../images/logosber.svg'


function Header() {

  return ( 
    <div className='header'>

      <div className='header__img-logo-container'>
          <img className='header__img-logo'src={headerLogoSber}></img>
          <div className='header__info-wrapper'>
            <p className='header__img-logo-name-company'>Сбербанк России</p>
            <p className='header__img-logo-title'>Моя компания</p>
          </div>
          <div className='header__arrowdown'></div>
      </div> 

      <div className='header__profile-container'>
        <div className='header__bell-container'>
          <div className='header__bell'></div>
          <div className='header__bell-counter-wrapper'><span className='header__bell-counter'>1</span></div>
        </div>
        <div className='header__user-container'>
          <img className='header__user-picture'></img>
          <p className='header__user-name'>Николай Дворядкин</p>
          <a className='header__link-icon' href="#" target='blank'></a>
        </div>
      </div>

    </div>
      
  ) 
}

export default Header;