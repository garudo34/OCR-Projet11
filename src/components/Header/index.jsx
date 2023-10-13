import { Link, NavLink } from 'react-router-dom'

import '../../styles/Header.css'
import KasaLogo from '../../assets/logo.svg'

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={KasaLogo} alt='Logo Kasa' className='logo' />
      </Link>

      <nav className='nav'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
