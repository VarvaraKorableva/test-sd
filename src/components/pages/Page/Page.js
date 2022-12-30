import React from 'react'
import SearchPanel from './SearchPanel/SearchPanel'
import ControlPanel from './ControlPanel/ControlPanel'
import './Page.css'

function Page({onClick, isClick, limit}) {

  return ( 
    <div className='page'>
      <SearchPanel 
        onClick={onClick}
      />
      <ControlPanel
        isClick={isClick}
        limit={limit}
      />
    </div>
      
  ) 
}

export default Page;