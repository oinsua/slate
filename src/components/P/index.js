import React from 'react'

const P = ({attributes, children}) => {
  return (
    <p {...attributes}>{children}</p>
  )
}

export default P