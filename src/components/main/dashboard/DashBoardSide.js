import React from 'react'
import Logged from '../../../images/Group 6.png'
import {
  DashboardSideWrapper,
  CompanyAccount,
  Navs
} from './DashBoardStyles'
import {FaCaretSquareDown} from 'react-icons/fa'
import invoice from '../../../images/Group 15.png'
import stick from '../../../images/Group.png'

const DashBoardSide = () => {
  return (
    <DashboardSideWrapper>
      <CompanyAccount>
        <img src={Logged} alt="logged in account"/>
        <div>
          <h4>Clayvant Inc</h4>
          <p>Manage Account</p>
        </div>
        <FaCaretSquareDown size={25}/>
      </CompanyAccount>
      <Navs>
        <div>
          <img src={invoice} alt="invoice"/>
          <p>Invoice</p>
        </div>
        <div>
          <img src={stick} alt="Management"/>
          <p>Management</p>
        </div>
        <div>
          <img src={stick} alt="security"/>
          <p>Security</p>
        </div>
        <div>
          <img src={stick} alt="Support"/>
          <p>Support</p>
        </div>
      </Navs>
    </DashboardSideWrapper>
  )
}

export default DashBoardSide;