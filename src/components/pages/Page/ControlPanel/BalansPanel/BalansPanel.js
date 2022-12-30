import React from 'react'
import './BalansPanel.css'

function BalansPanel() {

  return ( 
    <div className='balans-panel'>
      <div className='balans-panel__wrapper'>
        <p className='balans-panel__title'>Текущий баланс</p>
        <p className='balans-panel__amount'><span className='balans-panel__amount-span'>250</span> запросов</p>
      </div>  
      <button className='balans-panel__btn'>Пополнить</button>
    </div>
      
  ) 
}

export default BalansPanel;