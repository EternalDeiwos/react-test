'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import { SocialContainer, ViewContainer } from './View.jsx'
import LinkIconButton from './LinkIconButton.jsx'

import SnapchatIcon from '../img/snapchat-bespoke.png'
import InstagramIcon from '../img/insta-bespoke.png'
import DiscordIcon from '../img/discord-bespoke.png'
import FacebookIcon from '../img/fb-bespoke.png'
import GroupsIcon from '../img/grp-bespoke.png'

/**
 * SocialMedia
 */
class SocialMedia extends React.Component {

  render () {
    return (
      <SocialContainer>
        <LinkIconButton href={"http://www.snapchat.com/add/ru.hvz"} tooltip="Snapchat" src={SnapchatIcon} />
        <LinkIconButton href={"https://www.instagram.com/rhodeshvz"} tooltip="Instagram" src={InstagramIcon} />
        <LinkIconButton href={"https://discord.gg/CDRkAXF"} tooltip="Discord" src={DiscordIcon} />
        <LinkIconButton href={"https://www.facebook.com/groups/236555363064021"} tooltip="Facebook Group" src={FacebookIcon} />
        <LinkIconButton href={"https://www.facebook.com/groups/236555363064021"} tooltip="Facebook Event" src={GroupsIcon} />
      </SocialContainer>
    )
  }

}

export default SocialMedia
