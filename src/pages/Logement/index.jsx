import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Carousel from '../../components/Carousel'
import '../../styles/Logement.css'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

function Logement() {
  const { logementId } = useParams()
  const [logement, setLogement] = useState({})
  const navigate = useNavigate()

  const getData = () => {
    fetch('../data/logements.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (data) {
        const logementToRender = data.find((data) => data.id === logementId)
        if (logementToRender !== undefined) {
          setLogement(logementToRender)
        } else {
          navigate('/*')
        }
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const logementTitle = logement && logement.title
  const logementLocation = logement && logement.location
  const logementPictures = logement && logement.pictures
  const logementTags = logement && logement.tags
  const logementHostName = logement && logement.host && logement.host.name
  const logementHostPicture = logement && logement.host && logement.host.picture
  const logementRating = logement && logement.rating
  const logementDescription = logement && logement.description
  const logementEquipments = logement && logement.equipments

  return (
    <main className='logement'>
      <div className='logement-carousel'>
        <Carousel pictures={logementPictures && logementPictures} />
      </div>
      <div className='logement-informations'>
        <div className='logement-firstgroup'>
          <h2 className='logement-title'>{logementTitle}</h2>
          <h3 className='logement-location'>{logementLocation}</h3>
          <ul className='logement-tags'>
            {logementTags &&
              logementTags.map((tag, index) => (
                <li className='logement-tag' key={`tag-${index}`}>
                  {tag}
                </li>
              ))}
          </ul>
        </div>
        <div className='logement-secondgroup'>
          <div className='logement-tags-rating'>
            <Rating value={logementRating && parseInt(logementRating)} />
          </div>
          <div className='logement-host'>
            <div className='logement-host-name'>
              {logementHostName && logementHostName}
            </div>
            <img
              className='logement-host-picture'
              src={logementHostPicture && logementHostPicture}
              alt={logementHostPicture && logementHostPicture}
            />
          </div>
        </div>
      </div>

      <div className='logement-collapse-elements'>
        <div className='logement-description'>
          <Collapse title='Description' classname='small'>
            {logementDescription && logementDescription}
          </Collapse>
        </div>
        <div className='logement-equipments'>
          <Collapse title='Equipements' classname='small'>
            {logementEquipments && logementEquipments}
          </Collapse>
        </div>
      </div>
    </main>
  )
}
export default Logement
