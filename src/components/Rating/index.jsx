import PropTypes from 'prop-types'
import '../../styles/Rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5]

  Rating.propTypes = {
    value: PropTypes.number.isRequired,
  }

  Rating.defaultProps = {
    value: 0,
  }

  return (
    <div>
      {range.map((rangeElem, i) =>
        value >= rangeElem ? (
          <FontAwesomeIcon
            icon={faStar}
            key={`star-${i}`}
            className='icon-star icon-star-full'
          />
        ) : (
          <FontAwesomeIcon
            icon={faStar}
            key={`star-${i}`}
            className='icon-star icon-star-empty'
          />
        )
      )}
    </div>
  )
}
export default Rating
