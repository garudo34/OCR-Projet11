import '../../styles/Cards.css'
import { Link } from 'react-router-dom'

function Cards({ id, title, cover }) {
  return (
    <div className='logement-item'>
      <Link to={`/logement/${id}`}>
        <img
          className='logement-item-cover'
          src={cover}
          alt={`${title} cover`}
        />
        <div className='logement-item-overlay'>
          <div className='logement-item-title'>{title}</div>
        </div>
      </Link>
    </div>
  )
}

export default Cards
