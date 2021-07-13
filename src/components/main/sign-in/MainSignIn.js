import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import { MainWrapper } from '../../../GlobalStyles'
import { FormWrapper } from './SignInSytles'

const SignIn = () => {

  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const submitHandler = (e) =>{
    e.preventDefault()

    setEmail('')
    setPassword('')
  }
  return (
      <MainWrapper>
      <div>
        <p className="login">Don't have an account? <Link to="/">Sign Up</Link></p>
      </div>
      <FormWrapper>
        <h2>Welcome back to Prospa</h2>
        <h5>An account with powerful, personalised tools all in one place</h5>
        <form onSubmit={submitHandler}>
          <input type="email" placeholder="Email address" required value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)} />
          <Link to="/DashBoard"><Button type="submit" text="Next" /></Link>
        </form>
      </FormWrapper>
    </MainWrapper>
  )
}

export default SignIn;
