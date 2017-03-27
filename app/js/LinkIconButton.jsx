'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import IconButton from 'material-ui/IconButton'

const style = {
  iconStyle: {
    width: 48,
    height: 48,
    color: 'black',
  },
  containerStyle: {
    width: 96,
    height: 96,
    padding: 24,
    fontSize: 16,
  }
}

const LinkIconButton = (props) => {
  let { iconStyle, containerStyle } = style
  let icon

  if (props.iconClassName) {
    let faClasses = ['fa', 'fa-3x']

    let iconClassName = Array.isArray(props.iconClassName)
      ? faClasses.concat(props.iconClassName.map(cls => cls.startsWith('fa') ? cls : `fa-${cls}`)).join(' ')
      : faClasses.concat([props.iconClassName.startsWith('fa') ? props.iconClassName : `fa-${props.iconClassName}`]).join(' ')
    icon = <i className={iconClassName} aria-hidden="true"></i>
  } else if (props.src) {
    icon = <img src={props.src} />
  }

  return (
    <IconButton
      href={props.href}
      iconStyle={iconStyle}
      style={containerStyle}
      tooltip={props.tooltip}>
      {icon}
    </IconButton>
  )
}

export default LinkIconButton
