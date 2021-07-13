import { useState } from "react"
import { Link } from "react-router-dom"
import { MainWrapper } from "../../../GlobalStyles"
import { FormWrapper } from "../register/regStyles"
import Button from '../../button/Button'

const MainRegister = () => {
  const [firstname, setFirstname]= useState('')
  const [lastname, setLastname]= useState('')
  const [phone, setPhone]= useState('')
  const [email, setEmail]= useState('')

  const submitHandler = (e) =>{
    e.preventDefault()

    setFirstname('')
    setLastname('')
    setPhone('')
    setEmail('')
  }

  return (
    <MainWrapper>
      <div>
        <p className="login">Already a member? <Link to="/SignIn">Login</Link></p>
      </div>
      <FormWrapper>
        <h2>Create your account</h2>
        <h5>A short description abount account types</h5>
        <form onSubmit={submitHandler}>
          <input placeholder="First name" required value={firstname} onChange={e=>{setFirstname(e.target.value)}}/>
          <input placeholder="Last name" required value={lastname} onChange={e=>{setLastname(e.target.value)}} />
          <div className="phone"> 
            <select>
              <option>+234</option>
            </select>
            <input placeholder="Mobile number" className="phone-number" required value={phone} onChange={e=>{setPhone(e.target.value)}} />
          </div>
          <input type="email" placeholder="Email address" required value={email} onChange={e=>setEmail(e.target.value)} />
          <Link to="/Signup"><Button type="submit" text="Next"/></Link>
        </form>
      </FormWrapper>
    </MainWrapper>
  )
}

export default MainRegister;