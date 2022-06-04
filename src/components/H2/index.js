import React from 'react'

const H2 = ({attributes, children}) => {
    return (
      <h2 {...attributes}>{children}</h2>
    )
  }

export default H2