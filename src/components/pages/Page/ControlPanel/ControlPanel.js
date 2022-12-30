import React from 'react'
import './ControlPanel.css'
import Header from './Header/Header'
import MyCampanyInfo from './MyCampanyInfo/MyCampanyInfo'
import OutgoingRequests from './OutgoingRequests/OutgoingRequests'
import DbPanel from './DbPanel/DbPanel'
import BalansPanel from './BalansPanel/BalansPanel'
import InRequests from './InRequests/InRequests'

function ControlPanel({isClick, limit}) {

  return ( 
    <div className='control-panel'>
      <Header></Header>
      <h1 className='control-title'>Панель управления компании</h1>
      <div className='control-panel__main'>
        <div>
        <MyCampanyInfo></MyCampanyInfo>
        <OutgoingRequests></OutgoingRequests>
        <DbPanel></DbPanel>
        </div>
      
        <div>
        <BalansPanel></BalansPanel>
        <InRequests
          isClick={isClick}
          limit={limit}
        />
        </div>

      </div>
    </div>
      
  ) 
}

export default ControlPanel;