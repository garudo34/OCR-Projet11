import { Link } from 'react-router-dom'

import KasaLogo from '../../assets/logo.png'

function Header() {
  return (
    <nav>
      <Link to='/'>
        <img src={KasaLogo} alt='Logo Kasa' />
      </Link>

      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A Propos</Link>
      </div>
    </nav>
  )
}
export default Header
