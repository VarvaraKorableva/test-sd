import React from 'react'
import './DbPanel.css'

function DbPanel () {

  return ( 
    <div className='db-panel'>
      <p className='db-panel__title'>База данных компании</p>

      <ul className='db-panel__container'>
        <li className='db-panel__wrapper-li'>
          <div className='db-panel__wrapper'>
            <p className='db-panel__mean'>Сотрудники</p>
            <p className='db-panel__amount'>20</p>
          </div>  
          <div className='db-panel__arrow'></div>
        </li>
        <li className='db-panel__wrapper-li'>
          <div className='db-panel__wrapper'>
            <p className='db-panel__mean'>Товары и услуги</p>
            <p className='db-panel__amount'>1356</p>
          </div>
          <div className='db-panel__arrow'></div>
        </li>
        <li className='db-panel__wrapper-li'>
          <div className='db-panel__wrapper'>
            <p className='db-panel__mean'>Заводы</p>
            <p className='db-panel__amount'>3</p>
          </div>
          <div className='db-panel__arrow'></div>
        </li>
        <li className='db-panel__wrapper-li'>
          <div className='db-panel__wrapper'>
            <p className='db-panel__mean'>Партнёры</p>
            <p className='db-panel__amount'>12</p>
          </div>  
          <div className='db-panel__arrow'></div>
        </li>
      </ul>
    </div>
      
  ) 
}

export default DbPanel;