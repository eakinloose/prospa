import styled from "styled-components";


export const DashBoardMainWrapper = styled.div`
  grid-column:3/12;
  padding: 1rem;
  width: 95%;
  margin: 1rem auto;
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  img{
    padding-left: 2rem;
  }

  h3{
    font-weight: 100;
    color: grey;
  }

  .icon{
    height: 40px;
  }
`

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 0 1rem;

  h2{
    font-weight: 100;
  }

  p{
    font-size: 13px;
  }
  span{
    color: #FA4A84;
    text-decoration: underline;
    cursor: pointer;
  }


  button{
      width: 20%;
      margin: auto 0;
    }
`

export const AccontsWrapper = styled.div`
  grid-column:3/12;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`

export const AccountsBlock = styled.div`
  width: 49%;
  padding: 1rem;
  box-shadow: 0px 0.2px 4px grey;
  border-radius: 5px;

  .bank{
    display: flex;
    justify-content: space-between;
  }

  h5{
    font-weight: 100;
  }
  
  p{
    color: grey;
    margin-top: 5px;
  }

  img{
    height: 20px;
    width: 25px;
  }
  h1{
    font-weight: 100;
    margin-top: 5rem;

    span{
      font-size: 18px;
    }
  }
`

export const ChartSession = styled.div`
  width: 52%;
  padding: 1rem;
  box-shadow: 0px 0.2px 4px grey;
  border-radius: 5px;
`

export const OutflowWrapper = styled.div`
  width: 46%;
  padding: 2rem;
  box-shadow: 0px 0.2px 4px grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;

  h2{
    font-weight: 100;
  }

  p{
    font-size: 16px;
  }

  span{
    font-size: 12px;
  }
`

export const OutflowRecord = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TransactionWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  box-shadow: 0px 0.2px 4px grey;
  border-radius: 7px;
  margin-top: 1rem;

  button{
    border: solid 3px #FA4A84;
    border-radius: 5px;
    background: none;
    color: red;
    width: 100px;
    margin: 0;
  }
`

export const TransactionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const Details = styled.div`
  display: flex;
  margin-bottom: 2rem;

`
export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    color: grey;
  }

  .circle{
    width: 10px;
    background: grey;
    height: 10px;
    margin: 10px;
    border-radius: 20px;
  }
  
`