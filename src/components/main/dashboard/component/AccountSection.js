import React from 'react'
import { 
  AccontsWrapper,
  AccountsBlock } from './Mainstyles'
import Accounts from '../../dataTwo'

const AccountSection = () => {
  return (
    <AccontsWrapper>
      {Accounts.map((account, index) =>{
        return(
          <AccountsBlock key={index}>
            <div className="bank">
              <div>
                <h5>{account.type}</h5>
                <p>{account.bank}</p>
              </div>
              <img src={account.logo} alt="color"/>
            </div>
            <h1>{account.naira}<span>{account.kobo}</span></h1>
          </AccountsBlock>
        )
      })}
    </AccontsWrapper>
  )
}

export default AccountSection
