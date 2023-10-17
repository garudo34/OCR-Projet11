import { useEffect, useState } from 'react'
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
      <FontAwesomeIcon
        icon={faChevronLeft}
        className='arrow arrow-left'
        size='6x'
        onClick={handlePrevious}
      />

      {pictures &&
        pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={picture}
            className={slide === index ? 'slide' : 'slide slide-hidden'}
          />
        ))}
      <FontAwesomeIcon
        icon={faChevronRight}
        className='arrow arrow-right'
        size='6x'
        onClick={handleNext}
      />
      <span className='indicators'>
        {pictures &&
          pictures.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={
                  slide === index ? 'indicator' : 'indicator indicator-inactive'
                }
              ></button>
            )
          })}
      </span>
    </div>
  )
}

export default Carousel
