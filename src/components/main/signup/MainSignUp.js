import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import { MainWrapper } from '../../../GlobalStyles';
import { FormWrapper } from '../signup/signupStyles';
import AccountData from '../data';
import {FaBackspace} from 'react-icons/fa';
import {BiCheckCircle} from 'react-icons/bi';


const MainSignUp = () => {

  const [selectedAccount, setSelectedAccount] = useState(-1)

  return (
    <MainWrapper>
       <div className="top">
        <Link to="/" className="backspace"><FaBackspace/></Link>
        <p className="login">Already a member? <Link to="/SignIn">Login</Link></p>
      </div>
      <FormWrapper>
        <h2>open a new business account</h2>
        <h5>A short description comes here</h5>
        <form>
          {AccountData.map((options, index) => {
            return(
              <div className={selectedAccount===index? "optiondiv" : "div"} key={options.id}>
                <div className="options">
                  <input type="radio" value="cac-account" name="account type" onClick={()=>setSelectedAccount(index)}/>
                  <div>
                    <h4>{options.title}</h4>
                    {selectedAccount===index? 
                      <div>
                        <h5>{options.benefits}</h5>
                        <div className="options"><span><BiCheckCircle/></span><h5>{options.option1}</h5></div>
                        <div className="options"><span><BiCheckCircle/></span><h5>{options.option2}</h5></div>
                        <div className="options"><span><BiCheckCircle/></span><h5>{options.option3}</h5></div>
                      </div> : ''
                    }
                  </div>
                </div>
              </div>
            )
          })}
          <Link to="/Dashboard"><Button type="submit" text="Next" /></Link>
        </form>
      </FormWrapper>
    </MainWrapper>
  )
};

export default MainSignUp;