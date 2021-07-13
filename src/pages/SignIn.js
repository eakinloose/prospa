import React from 'react'
import { Page } from '../GlobalStyles'
import SigninSide from '../components/side/SIgninSide'
import MainSignIn from '../components/main/sign-in/MainSignIn'

const SignIn = () => {
  return (
      <Page>
        <SigninSide/>
        <MainSignIn/>
      </Page>
  )
}

export default SignIn
