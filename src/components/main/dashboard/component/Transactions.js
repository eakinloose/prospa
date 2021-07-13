import React from 'react';
import { TransactionWrapper, TransactionTop, Details, DetailsWrapper } from './Mainstyles';

const recentTrnsaction = [
  {
    details: "Transfer fee",
    time: "12.48 AM",
    amount: "-N145.00"
  },
  {
    details: "Adam Chapman",
    time: "12.48 AM",
    amount: "-N2000.00"
  },
  {
    details: "Akinloose Emmanuel",
    time: "12.48 AM",
    amount: "-N1495.00"
  },
  {
    details: "Otamere Osas",
    time: "12.48 AM",
    amount: "-N19905.00"
  }
];

const Transactions = () => {
  return (
    <TransactionWrapper>
      <TransactionTop>
        <span>Recent Transactions</span>
        <button>See all</button>
      </TransactionTop>
      <div>
        {recentTrnsaction.map((data, index)=>{
          return(
            <DetailsWrapper>
              <Details>
                <div className="circle"/>
                <div>
                  <span>{data.details}</span>
                  <p>{data.time}</p>
                </div>
              </Details>
              <span>{data.amount}</span>
            </DetailsWrapper>
          )
        })}
      </div>
    </TransactionWrapper>
  )
}

export default Transactions
