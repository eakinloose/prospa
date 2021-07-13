import styled from 'styled-components'
import { FormWrapperStyles } from '../../../GlobalStyles'

export const FormWrapper = styled.div`
  ${FormWrapperStyles}

  .options{
    display: flex;
  }

  .div{
    margin: 15px 0px;
    padding: 15px;
    box-shadow: 0px 1px 2px 0px grey;
    border-radius: 5px;
  }

  .optiondiv{
    /* margin: 10px; */
    border: solid 1px #FA4A84;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px grey;
    width: 100%;
  }

  input{
    width: 10%;
    border: none;
    box-shadow: none;
    padding: 100px;
    color: red;
  }

  span{
    color: green;
    transform: translateY(6px)
  }
`