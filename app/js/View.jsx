'use strict'

/**
 * Dependencies
 * @ignore
 */
import React from 'react'

const style = {
  viewContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative'
  },

  socialContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    minHeight: '20vh',
    position: 'relative',
  },

  viewParentStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '50vh',
    position: 'relative'
  }
}

const ViewContainer = (props) => {
  let { viewContainerStyle } = style
  return <div style={viewContainerStyle}>{props.children}</div>
}

const SocialContainer = (props) => {
  let { socialContainerStyle } = style
  return <div style={socialContainerStyle}>{props.children}</div>
}

const ViewParent = (props) => {
  let { viewParentStyle } = style
  return <div style={viewParentStyle}>{props.children}</div>
}

const View = (props) => {
  return (
    <ViewParent>
      <ViewContainer>
        {props.children}
      </ViewContainer>
    </ViewParent>
  )
}

export { View, ViewParent, ViewContainer, SocialContainer }
