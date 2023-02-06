import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false)


  const toggleExpanded = () => {
    setExpanded(!expanded)
  }



  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={toggleExpanded} >
          {expanded ? <GoChevronDown className='text-2xl' /> : <GoChevronLeft className='text-2xl' />}
        </div>
      </div>
      {
        expanded && <div className='p-2 border-t' >
          {children}
        </div>
      }

    </div>
  )
}

export default ExpandablePanel