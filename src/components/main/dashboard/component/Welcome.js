import React from 'react'
import { WelcomeWrapper } from './Mainstyles'
import Button from '../../../button/Button'

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <div>
        <h2>Welcome back, Kathy</h2>
        <p>Here's whats been happening in the last <span>7 days</span></p>
      </div>
      <Button text="Add a sub account"/>
    </WelcomeWrapper>
  )
}

export default Welcome;