import KasaLogo from '../../assets/logo-white.svg'
import '../../styles/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <img src={KasaLogo} alt='Logo Kasa' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
