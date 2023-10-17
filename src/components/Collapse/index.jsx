import '../../styles/Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'

function Collapse({ open, children, title, classname }) {
  const [isOpen, setIsOpen] = useState(open)
  const ref = useRef(null)
  const [height, setHeight] = useState(open ? undefined : 0)
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.getBoundingClientRect().height)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className={`collapse ${classname}`}>
      <div className='collapse-header' onClick={handleFilterOpening}>
        <h2 className='collapse-title'>{title}</h2>
        <button type='button' className='collapse-toggle'>
          {!isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} size='2x' />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} size='2x' />
          )}
        </button>
      </div>
      <div className='my-collapse' style={{ height }}>
        <div ref={ref} className='collapse-content'>
          {Array.isArray(children) ? (
            <ul className='collapse-content-list'>
              {children.map((child, index) => (
                <li
                  className='collapse-content-item'
                  key={`item-collapse-${index}`}
                >
                  {child}
                </li>
              ))}
            </ul>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  )
}

export default Collapse
