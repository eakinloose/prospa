import React from 'react';
import CashOutflow from './CashOutflow';
import NewChart from './Chart/Chart';
import { AccontsWrapper, ChartSession } from './Mainstyles';

const ChartBlock = () => {
  return (
    <AccontsWrapper>
      <ChartSession>
        <NewChart/>
      </ChartSession>
      <CashOutflow/>
    </AccontsWrapper>
  )
};

export default ChartBlock;
