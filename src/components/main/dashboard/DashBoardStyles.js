import styled from 'styled-components'

export const DashboardSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  height: 100%;
  width: 100%;
  max-width: 270px;
  grid-column:1/3;
  box-shadow: 0px 0.6px 9px gray;
  position: fixed;
`

export const CompanyAccount = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`

export const Navs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  width: 100%;

  img{
    padding-right: 1rem;
  }

  p{
    font-size: 13px;
    transform: translateY(3px);
    color: grey;
  }

  div{
    display: flex;
    margin: 1rem 0;
  }
`