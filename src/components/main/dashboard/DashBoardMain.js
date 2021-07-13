import React from 'react'
import TopDashboard from './component/TopDashboard'
import { DashBoardMainWrapper } from './component/Mainstyles'
import Welcome from './component/Welcome'
import AccountSection from './component/AccountSection'
import ChartBlock from './component/ChartBlock'
import Transactions from './component/Transactions'

const DashBoardMain = () => {
  return (
    <DashBoardMainWrapper>
      <TopDashboard/>
      <Welcome/>
      <AccountSection/>
      <ChartBlock/>
      <Transactions/>
    </DashBoardMainWrapper>
  )
}

export default DashBoardMain;
