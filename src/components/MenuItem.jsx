import './MenuItem.scss'

import React from 'react'
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

export default ({
  icon, title, action, isActive = null,
}) => (
  <button
    className={`menu-item${isActive && isActive() ? ' is-active' : ''} button1`}
    onClick={action}
    title={title}
    
  >
    <svg className="remix button2">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>
  </button>
)
