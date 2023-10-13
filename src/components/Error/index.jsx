import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
  return (
    <div className='error404'>
      <p className='mainMessage'>404</p>
      <p className='secondaryMessage'>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to='/' className='linkHome'>
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}
export default Error
