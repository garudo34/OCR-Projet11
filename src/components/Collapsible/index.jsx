import '../../styles/Collapsible.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'

function Collapsible({ open, children, title }) {
  const [isOpen, setIsOpen] = useState(open)
  const ref = useRef(null)
  const [height, setHeight] = useState(open ? undefined : 0)

  const handleFilterOpening = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.getBoundingClientRect().height)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className='collapse'>
      <div className='collapse-header'>
        <h2 className='collapse-title'>{title}</h2>
        <button
          type='button'
          className='collapse-toggle'
          onClick={handleFilterOpening}
        >
          {!isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} size='2x' />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} size='2x' />
          )}
        </button>
      </div>
      {isOpen && <div className='collapse-content'>{children}</div>}
    </div>
  )
}

export default Collapsible
