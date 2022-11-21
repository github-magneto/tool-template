import React from 'react'

import { Tooltip } from '@mui/material'

import Imitation from './utils.imitation'
import { includesArray, agent } from './utils.common'

function ConsoleButton(props) {
  const { name, src, codeInclued, codeMain, codeExclude, stay, style, callback } = props

  const ref = React.useRef()
  const audioRef = React.useRef()

  const [click, setClick] = React.useState(false)

  const onClick = () => {
    audioRef.current = new Audio(src)
    audioRef.current.volume = Imitation.state.volume
    audioRef.current.play()
    setClick(true)
    if (ref.current) clearTimeout(ref.current)
    ref.current = setTimeout(() => { setClick(false); ref.current = null }, 500)
  }

  const clicking = React.useMemo(() => {
    if (stay) {
      return codeInclued.some(i => includesArray(i, Imitation.state.pressKeep)) || click
    } else {
      return click
    }
  })

  React.useEffect(() => {
    if (codeMain && codeMain.length !== 0 && !codeMain.includes(Imitation.state.pressKeep[Imitation.state.pressKeep.length - 1])) return
    if (codeExclude && codeExclude.length !== 0 && includesArray(codeExclude, Imitation.state.pressKeep)) return
    if (!codeInclued.some(i => includesArray(i, Imitation.state.pressKeep))) return

    onClick()
  }, [Imitation.state.pressUpdate])

  React.useEffect(() => {
    if (callback) callback(click)
  }, [click])

  const style_ = React.useMemo(() => {
    var s = {
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.5s all',
      width: 72,
      height: 72,
      margin: 8,
      borderRadius: 12,
      fontWeight: 'bold',
      position: 'relative',
      fontSize: 12,
      boxShadow: '0 4px 8px gray',
    }
    var add
    if (style) {
      if (typeof style === 'function') add = style(clicking)
      if (typeof style === 'object' && style.reduce) add = style.reduce((t, i) => ({ ...t, ...i(clicking) }), {})
    }
    if (add) s = { ...s, ...add }
    return s
  }, [clicking])

  const R = <div style={{ display: 'inline-block' }}>
    <div
      style={style_}
      onMouseDown={agent() === 'pc' ? onClick : undefined}
      onTouchStart={agent() === 'phone' ? onClick : undefined}
    >
      <div>{name ? name : ''}</div>
    </div>
  </div>

  return Imitation.state.tooltip ?
    <Tooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
      {R}
    </Tooltip>
    : R
}

ConsoleButton.colorWB = (clicking) => {
  return {
    background: clicking ? 'black' : 'white',
    color: clicking ? 'white' : 'black'
  }
}
ConsoleButton.colorBW = (clicking) => {
  return {
    background: clicking ? 'white' : 'black',
    color: clicking ? 'black' : 'white'
  }
}
ConsoleButton.rotate = (clicking) => {
  return {
    transform: clicking ? `rotate(${Math.random() < 0.5 ? 45 : -45}deg)` : 'rotate(0)'
  }
}

export { ConsoleButton }