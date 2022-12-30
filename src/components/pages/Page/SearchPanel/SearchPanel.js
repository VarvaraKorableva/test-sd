import React from 'react'
import './SearchPanel.css'
import headerLogo from '../../../../images/logoSupplyDirector.svg'
import Navigation from './Navigation/Navigation'
import Requests from './Requests/Requests'
import HelpAndInf from './HelpAndInf/HelpAndInf'

function SearchPanel({onClick}) {

  return ( 
    <div className='search-panel'>
      <img className='search-panel__img-logo'src={headerLogo}></img>

      <form className='search-panel__form'>
        <button className='search-panel__search-btn'></button>
        <input 
          className='search-panel__input'
          placeholder="Поиск товаров"></input>
      </form>

      <Navigation></Navigation>
      <Requests></Requests>

      <button 
        className='search-panel__btn'
        type="button"
        onClick={onClick}
      >
        <span className='search-panel__btn-plus'></span> 
        Создать запрос
      </button>

      <HelpAndInf></HelpAndInf>

    </div>
      
  ) 
}

export default SearchPanel;