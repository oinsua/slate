import React from 'react'

const CodeElement = ({attributes, children}) => {
    return (
        <pre {...attributes}>
          <code>{children}</code>
        </pre>
      )
}

export default CodeElement