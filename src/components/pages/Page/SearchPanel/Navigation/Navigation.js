import React from 'react'
import './Navigation.css'

function Navigation() {

  return ( 
      <nav className='navigation'>
        <ul className='navigation__wrapper-ul'>
          <li className='navigation__container'>
            <div className='navigation__img-general navigation__img-home'></div>
            <a className='navigation__link navigation__link_active' href="#" target='blank'>Моя компания</a>
          </li>
          <li className='navigation__container'>
            <div className='navigation__img-general navigation__img-basket'></div>
            <a className='navigation__link' href="#" target='blank'>Товары и услуги</a>
          </li>
          <li className='navigation__container'>
            <div className='navigation__img-general navigation__img-bag'></div>
            <a className='navigation__link' href="#" target='blank'>Партнеры</a>
          </li>
          <li className='navigation__container'>
            <div className='navigation__img-general navigation__img-person'></div>
            <a className='navigation__link' href="#" target='blank'>Сотрудники</a>
          </li>
          <li className='navigation__container'> 
            <div className='navigation__img-general navigation__img-house'></div>
            <a className='navigation__link' href="#" target='blank'>Заводы и адреса</a>
          </li>
          <li className='navigation__container'>
            <div className='navigation__img-general navigation__img-loop'></div>
            <a className='navigation__link' href="#" target='blank'>Поиск товаров</a>
          </li>
        </ul>
      </nav>   
  ) 
}

export default Navigation;