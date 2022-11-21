import React from 'react'

import { ConsoleButton } from './View.Music.ConsoleButton'

import I_FA_stac_f1_A1M from '../static/Bassoon_stac_f1/FA_stac_f1_A1M.wav'
import I_FA_stac_f1_A2M from '../static/Bassoon_stac_f1/FA_stac_f1_A2M.wav'
import I_FA_stac_f1_A3M from '../static/Bassoon_stac_f1/FA_stac_f1_A3M.wav'
import I_FA_stac_f1_A4M from '../static/Bassoon_stac_f1/FA_stac_f1_A4M.wav'
import I_FA_stac_f1_B1 from '../static/Bassoon_stac_f1/FA_stac_f1_B1.wav'
import I_FA_stac_f1_C2 from '../static/Bassoon_stac_f1/FA_stac_f1_C2.wav'
import I_FA_stac_f1_C3 from '../static/Bassoon_stac_f1/FA_stac_f1_C3.wav'
import I_FA_stac_f1_C4 from '../static/Bassoon_stac_f1/FA_stac_f1_C4.wav'
import I_FA_stac_f1_C5 from '../static/Bassoon_stac_f1/FA_stac_f1_C5.wav'
import I_FA_stac_f1_C5M from '../static/Bassoon_stac_f1/FA_stac_f1_C5M.wav'
import I_FA_stac_f1_D2 from '../static/Bassoon_stac_f1/FA_stac_f1_D2.wav'
import I_FA_stac_f1_D3 from '../static/Bassoon_stac_f1/FA_stac_f1_D3.wav'
import I_FA_stac_f1_D4 from '../static/Bassoon_stac_f1/FA_stac_f1_D4.wav'
import I_FA_stac_f1_D5 from '../static/Bassoon_stac_f1/FA_stac_f1_D5.wav'
import I_FA_stac_f1_E2 from '../static/Bassoon_stac_f1/FA_stac_f1_E2.wav'
import I_FA_stac_f1_E3 from '../static/Bassoon_stac_f1/FA_stac_f1_E3.wav'
import I_FA_stac_f1_E4 from '../static/Bassoon_stac_f1/FA_stac_f1_E4.wav'
import I_FA_stac_f1_F2M from '../static/Bassoon_stac_f1/FA_stac_f1_F2M.wav'
import I_FA_stac_f1_F3M from '../static/Bassoon_stac_f1/FA_stac_f1_F3M.wav'
import I_FA_stac_f1_F4M from '../static/Bassoon_stac_f1/FA_stac_f1_F4M.wav'
import I_FA_stac_f1_G2M from '../static/Bassoon_stac_f1/FA_stac_f1_G2M.wav'
import I_FA_stac_f1_G3M from '../static/Bassoon_stac_f1/FA_stac_f1_G3M.wav'
import I_FA_stac_f1_G4M from '../static/Bassoon_stac_f1/FA_stac_f1_G4M.wav'

const option = [
  { "name": "C2", "src": I_FA_stac_f1_C2, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "C3", "src": I_FA_stac_f1_C3, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "C4", "src": I_FA_stac_f1_C4, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "C5", "src": I_FA_stac_f1_C5, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "C5M", "src": I_FA_stac_f1_C5M, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "D2", "src": I_FA_stac_f1_D2, "codeInclued": [["KeyQ"]], "codeMain": ["KeyQ"] },
  { "name": "D3", "src": I_FA_stac_f1_D3, "codeInclued": [["KeyW"]], "codeMain": ["KeyW"] },
  { "name": "D4", "src": I_FA_stac_f1_D4, "codeInclued": [["KeyE"]], "codeMain": ["KeyE"] },
  { "name": "D5", "src": I_FA_stac_f1_D5, "codeInclued": [["KeyR"]], "codeMain": ["KeyR"] },
  { "name": "E2", "src": I_FA_stac_f1_E2, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "E3", "src": I_FA_stac_f1_E3, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "E4", "src": I_FA_stac_f1_E4, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "F2", "src": I_FA_stac_f1_F2M, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "F3", "src": I_FA_stac_f1_F3M, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "F4", "src": I_FA_stac_f1_F4M, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "G2M", "src": I_FA_stac_f1_G2M, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "G3M", "src": I_FA_stac_f1_G3M, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "G4M", "src": I_FA_stac_f1_G4M, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
  { "name": "A1M", "src": I_FA_stac_f1_A1M, "codeInclued": [["KeyQ"]], "codeMain": ["KeyQ"] },
  { "name": "A2M", "src": I_FA_stac_f1_A2M, "codeInclued": [["KeyW"]], "codeMain": ["KeyW"] },
  { "name": "A3M", "src": I_FA_stac_f1_A3M, "codeInclued": [["KeyE"]], "codeMain": ["KeyE"] },
  { "name": "A4M", "src": I_FA_stac_f1_A4M, "codeInclued": [["KeyR"]], "codeMain": ["KeyR"] },
  { "name": "B1", "src": I_FA_stac_f1_B1, "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] },
]

const keyboardOption = [{ "name": "Space", "codeInclued": [["Space"]], "codeMain": ["Space"] }, { "name": "A", "codeInclued": [["KeyA"]], "codeMain": ["KeyA"] }, { "name": "B", "codeInclued": [["KeyB"]], "codeMain": ["KeyB"] }, { "name": "C", "codeInclued": [["KeyC"]], "codeMain": ["KeyC"] }, { "name": "D", "codeInclued": [["KeyD"]], "codeMain": ["KeyD"] }, { "name": "E", "codeInclued": [["KeyE"]], "codeMain": ["KeyE"] }, { "name": "F", "codeInclued": [["KeyF"]], "codeMain": ["KeyF"] }, { "name": "G", "codeInclued": [["KeyG"]], "codeMain": ["KeyG"] }, { "name": "H", "codeInclued": [["KeyH"]], "codeMain": ["KeyH"] }, { "name": "I", "codeInclued": [["KeyI"]], "codeMain": ["KeyI"] }, { "name": "J", "codeInclued": [["KeyJ"]], "codeMain": ["KeyJ"] }, { "name": "K", "codeInclued": [["KeyK"]], "codeMain": ["KeyK"] }, { "name": "L", "codeInclued": [["KeyL"]], "codeMain": ["KeyL"] }, { "name": "M", "codeInclued": [["KeyM"]], "codeMain": ["KeyM"] }, { "name": "N", "codeInclued": [["KeyN"]], "codeMain": ["KeyN"] }, { "name": "O", "codeInclued": [["KeyO"]], "codeMain": ["KeyO"] }, { "name": "P", "codeInclued": [["KeyP"]], "codeMain": ["KeyP"] }, { "name": "Q", "codeInclued": [["KeyQ"]], "codeMain": ["KeyQ"] }, { "name": "R", "codeInclued": [["KeyR"]], "codeMain": ["KeyR"] }, { "name": "S", "codeInclued": [["KeyS"]], "codeMain": ["KeyS"] }, { "name": "T", "codeInclued": [["KeyT"]], "codeMain": ["KeyT"] }, { "name": "U", "codeInclued": [["KeyU"]], "codeMain": ["KeyU"] }, { "name": "V", "codeInclued": [["KeyV"]], "codeMain": ["KeyV"] }, { "name": "W", "codeInclued": [["KeyW"]], "codeMain": ["KeyW"] }, { "name": "X", "codeInclued": [["KeyX"]], "codeMain": ["KeyX"] }, { "name": "Y", "codeInclued": [["KeyY"]], "codeMain": ["KeyY"] }, { "name": "Z", "codeInclued": [["KeyZ"]], "codeMain": ["KeyZ"] }, { "name": "1", "codeInclued": [["Digit1"]], "codeMain": ["Digit1"] }, { "name": "2", "codeInclued": [["Digit2"]], "codeMain": ["Digit2"] }, { "name": "3", "codeInclued": [["Digit3"]], "codeMain": ["Digit3"] }, { "name": "4", "codeInclued": [["Digit4"]], "codeMain": ["Digit4"] }, { "name": "5", "codeInclued": [["Digit5"]], "codeMain": ["Digit5"] }, { "name": "6", "codeInclued": [["Digit6"]], "codeMain": ["Digit6"] }, { "name": "7", "codeInclued": [["Digit7"]], "codeMain": ["Digit7"] }, { "name": "8", "codeInclued": [["Digit8"]], "codeMain": ["Digit8"] }, { "name": "9", "codeInclued": [["Digit9"]], "codeMain": ["Digit9"] }, { "name": "0", "codeInclued": [["Digit0"]], "codeMain": ["Digit0"] }]

function App() {
  return <div id='console' style={{ position: 'absolute', width: 1500, height: 1000 }}>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>

      <div>
        {
          ['0', '1', '2', '3', '4', '5', '6', '7', '8'].map(i => {
            return <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {
                option.filter(i_ => i_.name.includes(i)).map((i, index) => {
                  return <ConsoleButton {...i} style={[ConsoleButton.colorWB, ConsoleButton.rotate]} />
                })
              }
            </div>
          })
        }
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          'VCDRTGF'.split('').map(i => {
            return <ConsoleButton {...keyboardOption.find(i_ => i_.name === i)} stay={true} style={[ConsoleButton.colorWB]} />
          })
        }
        <div style={{ margin: '0 16px' }}>
          {
            keyboardOption.filter(i => 'Space' === i.name).map((i, index) => {
              return <ConsoleButton {...i} stay={true} style={[ConsoleButton.colorWB]} />
            })
          }
        </div>
        {
          'JHUIKMN'.split('').map(i => {
            return <ConsoleButton {...keyboardOption.find(i_ => i_.name === i)} stay={true} style={[ConsoleButton.colorWB]} />
          })
        }
      </div>

    </div>

  </div>
}

export default App