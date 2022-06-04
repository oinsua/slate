import React from 'react'

const H1 = ({attributes, children}) => {
  return (
    <h1 {...attributes}>{children}</h1>
  )
}

export default H1