import React from 'react'
import classNames from 'classnames'

const Button = ({text, variant = "default"}) => {
  return (
    <button className={classNames({
      "p-4 h-10 flex items-center rounded": true,
      "bg-gray-100": variant == "default"
    })}>{text} {variant}</button>
  )
}

export default Button