import '../../styles/Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'

function Collapse({ open, children, title, classname }) {
  const [isOpen, setIsOpen] = useState(open)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(open ? undefined : 0)
  const toggleContent = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.getBoundingClientRect().height)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className={`collapse ${classname ? classname : ''}`}>
      <div className='collapse-header' onClick={toggleContent}>
        <h2 className='collapse-title'>{title}</h2>
        <button type='button' className='collapse-toggle'>
          <FontAwesomeIcon
            icon={faChevronDown}
            size='2x'
            className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
      <div className='my-collapse' style={{ height }}>
        <div ref={contentRef} className='collapse-content'>
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
