import { useState } from 'react'
import '../../styles/Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function Carousel({ pictures }) {
  const [slide, setSlide] = useState(0)
  const length = pictures && pictures.length

  const handlePrevious = () => {
    const newSlide = slide - 1
    setSlide(newSlide < 0 ? length - 1 : newSlide)
  }

  const handleNext = () => {
    const newSlide = slide + 1
    setSlide(newSlide >= length ? 0 : newSlide)
  }

  return (
    <div className='carousel'>
      {pictures &&
        pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={picture}
            className={slide === index ? 'slide' : 'slide slide-hidden'}
          />
        ))}

      {length >= 2 ? (
        <>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='arrow arrow-left'
            size='6x'
            onClick={handlePrevious}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className='arrow arrow-right'
            size='6x'
            onClick={handleNext}
          />
          <span className='count'>{`${slide + 1} / ${length}`}</span>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Carousel
