import React from 'react'
import './MyCampanyInfo.css'

function MyCampanyInfo() {

  return ( 
    <div className='my-campany-info'>
      <p className='my-campany-info__title'>Моя компания</p>
      <p className='my-campany-info__name'>Сбербанк России</p>
      <p className='my-campany-info__short-name'>ПАО Сбербанк</p>
      <div className='my-campany-info__logo'></div>
      <div className='my-campany-info__star-container'>
        <div className='my-campany-info__star'></div>
        <p className='my-campany-info__points'>4,7</p>
      </div>
      <p className='my-campany-info__function'>Изменить информацию</p>
    </div>
      
  ) 
}

export default MyCampanyInfo;