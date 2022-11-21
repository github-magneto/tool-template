import React from 'react'

import Imitation from './utils.imitation'
import ConsoleBassoon_stac_f1 from './View.Music.ConsoleSource.Bassoon_stac_f1'
import ConsoleSimple_piano from './View.Music.ConsoleSource.Simple_piano'

export const option = [
  {
    name: 'Simple_piano',
    component: ConsoleSimple_piano,
  },
  {
    name: 'Bassoon_stac_f1',
    component: ConsoleBassoon_stac_f1,
  },
]

function App() {
  const current = React.useMemo(() => {
    return option.find(i => i.name === Imitation.state.console)
  }, [Imitation.state.console])

  React.useEffect(() => {
    if (!current) return

    const el = document.getElementById('console')

    const size = Math.min(Imitation.state.screenWidth / el.offsetWidth, Imitation.state.screenHeight / el.offsetHeight)

    if (size < 1) Imitation.assignState({ scale: size })
  }, [current])

  return current ? <current.component/> : null
}

export default App