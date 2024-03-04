import React from 'react'

import './MenuItem.scss'

export const MenuItem = ({ menuItemText }) => {
  const style = {
    color: '#F9995D'
  }

  return (
    <li>
      <a href='#'>{menuItemText}</a>
    </li>
  )
}
