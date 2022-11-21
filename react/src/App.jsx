import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Default from './view/Page.Default'
import Message from './view/Component.Message'
import Spin from './view/Component.Spin'

function App() {
  return <HashRouter>
    <Message />
    <Spin />

    <Switch>
      <Route path='/' exact><Default /></Route>
    </Switch>
  </HashRouter>
}

export default App