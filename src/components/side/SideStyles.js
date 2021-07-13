import styled from 'styled-components'

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #7e51ff;
  padding: 1rem;
  height: 100%;
  width: 100%;
  max-width: 270px;
  grid-column:1/3;
  color: white;

  .logo{
    height: 16px;
  }

  .dashes{
    width: 100%;
    margin: 30px 0px;
  }

  .vault{
    width: 100%;
  }

  h2{
    font-weight: 100;
    margin-top: 2.5rem;
  }

`

export const SideWrapperSignin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1C1335;
  padding: 1rem;
  height: 100%;
  width: 100%;
  max-width: 270px;
  grid-column:1/3;
  color: white;

  .logo{
    height: 16px;
  }

  .dashes{
    width: 100%;
    margin: 30px 0px;
  }

  .vault{
    width: 100%;
  }

  h2{
    font-weight: 100;
    margin-top: 2.5rem;
  }

`