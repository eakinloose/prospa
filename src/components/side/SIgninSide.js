import { SideWrapperSignin } from './SideStyles'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import dashes from '../../images/dashes.png'
import vault from '../../images/vault.png'

const SideDisplay = () => {
  return (
    <>
      <SideWrapperSignin>
        <div>
          <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <img className="dashes" src={dashes} alt=" dashes"/>
          <h2>Create multiple sub-account</h2>
          <p>Aute proident exercitation amet esse laboris laboris consequat proident. .</p>
        </div>
        <img className="vault" src={vault} alt  ="vault"/>
        <p>&copy;2021 Prospa.inc</p>
      </SideWrapperSignin>
    </>
  )
}

export default SideDisplay
