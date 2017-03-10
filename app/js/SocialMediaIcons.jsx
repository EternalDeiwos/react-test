'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { SocialContainer, ViewContainer } from './View.jsx'
import IconButton from 'material-ui/IconButton';
import DiscordIcon from '../img/fa-discord-o.png'

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
      ? faClasses.concat(props.iconClassName).join(' ')
      : faClasses.concat([props.iconClassName]).join(' ')
    icon = <i className={iconClassName} aria-hidden="true"></i>
  } else if (props.src) {
    icon = <img src={props.src} />
  }

  return (
    <IconButton
      href={props.href}
      iconStyle={iconStyle}
      style={containerStyle}>
      {icon}
    </IconButton>
  )
}

/**
 * SocialMedia
 */
class SocialMedia extends React.Component {

  render () {
    return (
      <SocialContainer>
        <LinkIconButton href={"https://snapchat.com"} iconClassName={'fa-snapchat-ghost'} />
        <LinkIconButton href={"https://www.instagram.com/rhodeshvz"} iconClassName={'fa-instagram'} />
        <LinkIconButton href={"https://discord.gg/CDRkAXF"} src={DiscordIcon} />
        <LinkIconButton href={"https://www.facebook.com/groups/236555363064021"} iconClassName={'fa-facebook-official'} />
        <LinkIconButton href={"https://www.facebook.com/groups/236555363064021"} iconClassName={'fa-calendar'} />
      </SocialContainer>
    )
  }

}

export default SocialMedia
