import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Message from './view/Component.Message'
import Spin from './view/Component.Spin'

function App() {
  return <HashRouter>
    <Message />
    <Spin />

    <Switch>
      <Route path='/' exact></Route>
    </Switch>
  </HashRouter>
}

export default App