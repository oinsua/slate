import React from 'react'

const H5 = ({attributes, children}) => {
  return (
    <h5 {...attributes}>{children}</h5>
  )
}

export default H5