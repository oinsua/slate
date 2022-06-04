import React from 'react'

const DefaultElement = ({attributes, children}) => {
  return (
    <div {...attributes}>{children}</div>
  )
}

export default DefaultElement