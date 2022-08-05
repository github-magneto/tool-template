import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

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