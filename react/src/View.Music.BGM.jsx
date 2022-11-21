import React from 'react'

import Imitation from './utils.imitation'

import audiofreehighqps_BF_E1_CKwRIaIEIkVgAAuSSgCR2Rt6 from '../static/BGM/_storages_7a26-audiofreehighqps_BF_E1_CKwRIaIEIkVgAAuSSgCR2Rt6.m4a'

export const option = [
  {
    name: 'JOJO',
    src: audiofreehighqps_BF_E1_CKwRIaIEIkVgAAuSSgCR2Rt6
  }
]

function App() {
  const current = React.useMemo(() => {
    return option.find(i => i.name === Imitation.state.bgm)
  }, [Imitation.state.bgm])

  return current ? <audio key={current.src} loop autoPlay controls style={{ width: '100%' }}><source src={current.src} /></audio> : null
}

export default App