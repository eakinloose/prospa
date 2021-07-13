import React from 'react'
import OutflowData from '../../Outflowdata'
import ProgressBar from '@ramonak/react-progress-bar'
import { OutflowWrapper, OutflowRecord } from './Mainstyles'

const CashOutflow = () => {
  return (
    <OutflowWrapper>
      <h2>Cash outflow</h2>
      {OutflowData.map((data, index)=>{
        return(
          <OutflowRecord key={index}>
            <div>
              <p>{data.name}</p>
            </div>
            <div>
              <span>{data.amount}</span>
              <ProgressBar
                height="5px"
                bgColor="#FFCF56"
                completed= {+data.completed}
                width= "199px"
                borderRadius="50px"
                baseBgColor="#e0e0de"
                isLabelVisible={false}/>
            </div>
          </OutflowRecord>
        )
      })}
    </OutflowWrapper>
  )
}

export default CashOutflow
