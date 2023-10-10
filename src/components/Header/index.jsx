import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import KasaLogo from '../../assets/logo.svg'

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={KasaLogo} alt='Logo Kasa' className='logo' />
      </Link>

      <nav className='nav'>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A Propos</Link>
      </nav>
    </header>
  )
}
export default Header
