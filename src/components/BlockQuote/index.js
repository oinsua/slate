import React from 'react'

const BlockQuote = ({attributes, children}) => {
    return (
        <blockquote {...attributes}>
          {children}
        </blockquote>
      )
}

export default BlockQuote