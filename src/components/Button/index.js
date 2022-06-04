import React from 'react'

const Button = ({onMouseDown, children, styles}) => {
  return (
    <button onMouseDown={onMouseDown} style={styles} >
        {children}
    </button>
  )
}

export default Button