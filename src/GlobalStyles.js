import styled, {createGlobalStyle, css} from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
  }

  html, body{
    overflow-x: hidden;
  }

  button{
    padding: 14px;
    width: 100%;
    background: #FA4A84;
    border: none;
    font-size: 13px;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    margin: 25px 0px;
  }

  p{
    font-size: 11px;
  }

  a{
    text-decoration: none;
    color: #FA4A84;
  }
`

export const Page = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  height: 100vh;

`

export const FormWrapperStyles = css`
  padding: 3rem;
  width: 46%;
  left:27%;
  position: absolute;
  top: 50%;
  min-width: 329px;
  transform: translateY(-50%);
  height: auto;

  h2, h4, h5{
    font-weight: 100;
  }

  h5{
    color: grey;
    padding: 5px;
  }

  input{
    width: 100%;
    margin-top: 15px;
    background: #F4F8FB;
    border: none;
    padding: 12px;
    box-shadow: 0px 1px 3px 0px grey;
  }

  input:focus, select:focus{
    border-bottom: solid 3px #FA4A84;
    outline: none;
  }

  select, option{
    padding: 15px 5px;
    margin-top: 15px;
    border: none;
    background:  #F4F8FB;
    box-shadow: 0px 1px 3px 0px grey;
  }
  .phone-number{
    width: 78%;
  }
  .phone{
    display: flex;
    justify-content: space-between;
  }

`

export const MainWrapper = styled.div`
  padding: 1rem;
  grid-column:3/12;
  height: 100vh;
  position: relative;

  .login{
    position: fixed;
    right: 4rem;
  }
  span{
    color: red;
  }
  .top{
    display: flex;
  }

  .backspace{
    display: inline-block;
    color: grey;
  }
`