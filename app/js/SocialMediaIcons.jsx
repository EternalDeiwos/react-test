'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { SocialContainer, ViewContainer } from './View.jsx'
import IconButton from 'material-ui/IconButton';

import SnapchatIcon from '../img/snapchat-bespoke.png'
import InstagramIcon from '../img/insta-bespoke.png'
import DiscordIcon from '../img/discord-bespoke.png'
import FacebookIcon from '../img/fb-bespoke.png'
import GroupsIcon from '../img/grp-bespoke.png'

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
        <LinkIconButton href={"http://www.snapchat.com/add/ru.hvz"} src={SnapchatIcon} />
        <LinkIconButton href={"https://www.instagram.com/rhodeshvz"} src={InstagramIcon} />
        <LinkIconButton href={"https://discord.gg/CDRkAXF"} src={DiscordIcon} />
        <LinkIconButton href={"https://www.facebook.com/groups/236555363064021"} src={FacebookIcon} />
        <LinkIconButton href={"https://www.facebook.com/groups/236555363064021"} src={GroupsIcon} />
      </SocialContainer>
    )
  }

}

export default SocialMedia
