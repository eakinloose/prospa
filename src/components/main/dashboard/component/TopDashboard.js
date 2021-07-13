import React from 'react'
import {RiNotification3Line} from 'react-icons/ri'
import Oval from '../../../../images/Oval.png'
import { TopWrapper } from './Mainstyles'

const TopDashboard = () => {
  return (
    <TopWrapper>
      <h3>Dashboard</h3>
      <div>
        <RiNotification3Line className="icon" size={22}/>
        <img src={Oval} alt="avatar"/>
      </div>
    </TopWrapper>
  )
}

export default TopDashboard;