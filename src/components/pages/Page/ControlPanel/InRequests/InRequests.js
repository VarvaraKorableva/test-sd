import React from 'react'
import './InRequests.css'
import Preloader from '../../../../Preloader/Preloader'

function InRequests ({isClick, limit}) {

  const requests = [
    {
      'product':'Корпус из АБС пластика',
      'date':'06.07', 
    },
    {
      'product':'Гайка оцинкованная М16',
      'date':'06.07', 
    },
    {
      'product':'Пульсоксиметр Contec CMS 50D2',
      'date':'06.07', 
    },
    {
      'product':'Портативный рециркулятор воздуха дл...',
      'date':'05.07', 
    },  {
      'product':'Ультрафиолетовая лампа с пультом',
      'date':'05.07', 
    },
    {
      'product':'Карбамид 46%',
      'date':'05.07', 
    },
  ]

  return ( 
    <div className='in-requests'>
      <div className='in-requests__title-container'>
        <p className='in-requests__title'>Входящие запросы</p>
        <div className='in-requests__title-counter'><span className='in-requests__title-counter-inside'>5</span></div>
      </div>

      <div className='in-requests__waiting-list'>
        <p className='in-requests__waiting-list-title'>5 запросов ожидают одобрения</p>
        <div className='in-requests__waiting-list-arrow'></div>
      </div>

      <p className='in-requests__info'>10 запросов за всё время</p>

      <p className='in-requests__sub-title'>Последние запросы на сайте</p>
      {isClick?
      <ul className='in-requests__req-wrapper'>
      {requests.slice(0, limit).map((item)=> (
      <li className='in-requests__req-container'>
        <div className='in-requests__wrapper'>
          <p className='in-requests__req-container-date'>{item.date}</p>
          <p className='in-requests__req-container-product'>{item.product}</p>
        </div>  
          <div className='in-requests__req-container-arrow'></div>
      </li> 
      ))}
    </ul>
    : <></>}
    </div>
  ) 
}

export default InRequests;
//key={item._id}
