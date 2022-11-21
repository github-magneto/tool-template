import React from 'react'

import Music from './View.Page.Music'
import Message from './View.Global.Message'
import Spin from './View.Global.Spin'

function App() {
  return <>
    <Message />
    <Spin />

    <Music />
  </>
}

export default App