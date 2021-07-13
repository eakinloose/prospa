import React from 'react'
import DashBoardMain from '../components/main/dashboard/DashBoardMain'
import DashBoardSide from '../components/main/dashboard/DashBoardSide'
import { Page } from '../GlobalStyles'

const DashBoard = () => {
  return (
    <Page>
      <DashBoardSide/>
      <DashBoardMain/>
    </Page>
  )
}

export default DashBoard;
