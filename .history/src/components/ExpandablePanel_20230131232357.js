import React from 'react'

function ExpandablePanel({ header, children }) {
  return (
    <div className='mb-2 mt-2 border rounded flex items-center pl-4'>
      {header}
      <div className='p-2 border-t' >
        {children}
      </div>
    </div>
  )
}

export default ExpandablePanel