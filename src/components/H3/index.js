import React from 'react'

const H3 = ({attributes, children}) => {
  return (
    <h3 {...attributes}>{children}</h3>
  )
}

export default H3