import React from 'react'

import { ConsoleButton } from './View.Music.ConsoleButton'

import I_a0 from '../static/Simple_piano/a0.m4a'
import I_a0m from '../static/Simple_piano/a0m.m4a'
import I_a1 from '../static/Simple_piano/a1.m4a'
import I_a1m from '../static/Simple_piano/a1m.m4a'
import I_a2 from '../static/Simple_piano/a2.m4a'
import I_a2m from '../static/Simple_piano/a2m.m4a'
import I_a3 from '../static/Simple_piano/a3.m4a'
import I_a3m from '../static/Simple_piano/a3m.m4a'
import I_a4 from '../static/Simple_piano/a4.m4a'
import I_a4m from '../static/Simple_piano/a4m.m4a'
import I_a5 from '../static/Simple_piano/a5.m4a'
import I_a5m from '../static/Simple_piano/a5m.m4a'
import I_a6 from '../static/Simple_piano/a6.m4a'
import I_a6m from '../static/Simple_piano/a6m.m4a'
import I_a7 from '../static/Simple_piano/a7.m4a'
import I_a7m from '../static/Simple_piano/a7m.m4a'
import I_b0 from '../static/Simple_piano/b0.m4a'
import I_b1 from '../static/Simple_piano/b1.m4a'
import I_b2 from '../static/Simple_piano/b2.m4a'
import I_b3 from '../static/Simple_piano/b3.m4a'
import I_b4 from '../static/Simple_piano/b4.m4a'
import I_b5 from '../static/Simple_piano/b5.m4a'
import I_b6 from '../static/Simple_piano/b6.m4a'
import I_b7 from '../static/Simple_piano/b7.m4a'
import I_c1 from '../static/Simple_piano/c1.m4a'
import I_c1m from '../static/Simple_piano/c1m.m4a'
import I_c2 from '../static/Simple_piano/c2.m4a'
import I_c2m from '../static/Simple_piano/c2m.m4a'
import I_c3 from '../static/Simple_piano/c3.m4a'
import I_c3m from '../static/Simple_piano/c3m.m4a'
import I_c4 from '../static/Simple_piano/c4.m4a'
import I_c4m from '../static/Simple_piano/c4m.m4a'
import I_c5 from '../static/Simple_piano/c5.m4a'
import I_c5m from '../static/Simple_piano/c5m.m4a'
import I_c6 from '../static/Simple_piano/c6.m4a'
import I_c6m from '../static/Simple_piano/c6m.m4a'
import I_c7 from '../static/Simple_piano/c7.m4a'
import I_c7m from '../static/Simple_piano/c7m.m4a'
import I_c8 from '../static/Simple_piano/c8.m4a'
import I_d1 from '../static/Simple_piano/d1.m4a'
import I_d1m from '../static/Simple_piano/d1m.m4a'
import I_d2 from '../static/Simple_piano/d2.m4a'
import I_d2m from '../static/Simple_piano/d2m.m4a'
import I_d3 from '../static/Simple_piano/d3.m4a'
import I_d3m from '../static/Simple_piano/d3m.m4a'
import I_d4 from '../static/Simple_piano/d4.m4a'
import I_d4m from '../static/Simple_piano/d4m.m4a'
import I_d5 from '../static/Simple_piano/d5.m4a'
import I_d5m from '../static/Simple_piano/d5m.m4a'
import I_d6 from '../static/Simple_piano/d6.m4a'
import I_d6m from '../static/Simple_piano/d6m.m4a'
import I_d7 from '../static/Simple_piano/d7.m4a'
import I_d7m from '../static/Simple_piano/d7m.m4a'
import I_e1 from '../static/Simple_piano/e1.m4a'
import I_e2 from '../static/Simple_piano/e2.m4a'
import I_e3 from '../static/Simple_piano/e3.m4a'
import I_e4 from '../static/Simple_piano/e4.m4a'
import I_e5 from '../static/Simple_piano/e5.m4a'
import I_e6 from '../static/Simple_piano/e6.m4a'
import I_e7 from '../static/Simple_piano/e7.m4a'
import I_f1 from '../static/Simple_piano/f1.m4a'
import I_f1m from '../static/Simple_piano/f1m.m4a'
import I_f2 from '../static/Simple_piano/f2.m4a'
import I_f2m from '../static/Simple_piano/f2m.m4a'
import I_f3 from '../static/Simple_piano/f3.m4a'
import I_f3m from '../static/Simple_piano/f3m.m4a'
import I_f4 from '../static/Simple_piano/f4.m4a'
import I_f4m from '../static/Simple_piano/f4m.m4a'
import I_f5 from '../static/Simple_piano/f5.m4a'
import I_f5m from '../static/Simple_piano/f5m.m4a'
import I_f6 from '../static/Simple_piano/f6.m4a'
import I_f6m from '../static/Simple_piano/f6m.m4a'
import I_f7 from '../static/Simple_piano/f7.m4a'
import I_f7m from '../static/Simple_piano/f7m.m4a'
import I_g1 from '../static/Simple_piano/g1.m4a'
import I_g1m from '../static/Simple_piano/g1m.m4a'
import I_g2 from '../static/Simple_piano/g2.m4a'
import I_g2m from '../static/Simple_piano/g2m.m4a'
import I_g3 from '../static/Simple_piano/g3.m4a'
import I_g3m from '../static/Simple_piano/g3m.m4a'
import I_g4 from '../static/Simple_piano/g4.m4a'
import I_g4m from '../static/Simple_piano/g4m.m4a'
import I_g5 from '../static/Simple_piano/g5.m4a'
import I_g5m from '../static/Simple_piano/g5m.m4a'
import I_g6 from '../static/Simple_piano/g6.m4a'
import I_g6m from '../static/Simple_piano/g6m.m4a'
import I_g7 from '../static/Simple_piano/g7.m4a'
import I_g7m from '../static/Simple_piano/g7m.m4a'

const control = [
  ['KeyA', 'KeyS','KeyD','KeyZ','KeyX','KeyC','KeyV'],
  ['KeyR', 'KeyT','KeyY','KeyU','KeyI','KeyO','KeyP'],
]

const option = [
  { "name": "A0", "codeInclued": [["Digit1"]], "codeMain": ["Digit1"], "src": I_a0 },
  { "name": "A0M", "codeInclued": [["Digit2"]], "codeMain": ["Digit2"], "src": I_a0m },
  { "name": "B0", "codeInclued": [["Digit3"]], "codeMain": ["Digit3"], "src": I_b0 },
  { "name": "C1", "codeInclued": [[control[1][0], control[0][0]]], "codeExclude": ["Space"], "codeMain": [control[1][0], control[0][0]], "src": I_c1 },
  { "name": "C1M", "codeInclued": [["Space", control[1][0], control[0][0]]], "codeExclude": [], "codeMain": [control[1][0], control[0][0]], "src": I_c1m },
  { "name": "D1", "codeInclued": [[control[1][1], control[0][0]]], "codeExclude": ["Space"], "codeMain": [control[1][1], control[0][0]], "src": I_d1 },
  { "name": "D1M", "codeInclued": [["Space", control[1][1], control[0][0]]], "codeExclude": [], "codeMain": [control[1][1], control[0][0]], "src": I_d1m },
  { "name": "E1", "codeInclued": [[control[1][2], control[0][0]]], "codeExclude": ["Space"], "codeMain": [control[1][2], control[0][0]], "src": I_e1 },
  { "name": "F1", "codeInclued": [[control[1][3], control[0][0]]], "codeExclude": ["Space"], "codeMain": [control[1][3], control[0][0]], "src": I_f1 },
  { "name": "F1M", "codeInclued": [["Space", control[1][3], control[0][0]]], "codeExclude": [], "codeMain": [control[1][3], control[0][0]], "src": I_f1m },
  { "name": "G1", "codeInclued": [[control[1][4], control[0][0]]], "codeExclude": ["Space"], "codeMain": [control[1][4], control[0][0]], "src": I_g1 },
  { "name": "G1M", "codeInclued": [["Space", control[1][4], control[0][0]]], "codeExclude": [], "codeMain": [control[1][4], control[0][0]], "src": I_g1m },
  { "name": "A1", "codeInclued": [[control[1][5], control[0][0]]], "codeExclude": ["Space"], "codeMain": [control[1][5], control[0][0]], "src": I_a1 },
  { "name": "A1M", "codeInclued": [["Space", control[1][5], control[0][0]]], "codeExclude": [], "codeMain": [control[1][5], control[0][0]], "src": I_a1m },
  { "name": "B1", "codeInclued": [[control[1][6], control[0][0]]], "codeExclude": ["Space"], "codeMain": [control[1][6], control[0][0]], "src": I_b1 },
  { "name": "C2", "codeInclued": [[control[1][0], control[0][1]]], "codeExclude": ["Space"], "codeMain": [control[1][0], control[0][1]], "src": I_c2 },
  { "name": "C2M", "codeInclued": [["Space", control[1][0], control[0][1]]], "codeExclude": [], "codeMain": [control[1][0], control[0][1]], "src": I_c2m },
  { "name": "D2", "codeInclued": [[control[1][1], control[0][1]]], "codeExclude": ["Space"], "codeMain": [control[1][1], control[0][1]], "src": I_d2 },
  { "name": "D2M", "codeInclued": [["Space", control[1][1], control[0][1]]], "codeExclude": [], "codeMain": [control[1][1], control[0][1]], "src": I_d2m },
  { "name": "E2", "codeInclued": [[control[1][2], control[0][1]]], "codeExclude": ["Space"], "codeMain": [control[1][2], control[0][1]], "src": I_e2 },
  { "name": "F2", "codeInclued": [[control[1][3], control[0][1]]], "codeExclude": ["Space"], "codeMain": [control[1][3], control[0][1]], "src": I_f2 },
  { "name": "F2M", "codeInclued": [["Space", control[1][3], control[0][1]]], "codeExclude": [], "codeMain": [control[1][3], control[0][1]], "src": I_f2m },
  { "name": "G2", "codeInclued": [[control[1][4], control[0][1]]], "codeExclude": ["Space"], "codeMain": [control[1][4], control[0][1]], "src": I_g2 },
  { "name": "G2M", "codeInclued": [["Space", control[1][4], control[0][1]]], "codeExclude": [], "codeMain": [control[1][4], control[0][1]], "src": I_g2m },
  { "name": "A2", "codeInclued": [[control[1][5], control[0][1]]], "codeExclude": ["Space"], "codeMain": [control[1][5], control[0][1]], "src": I_a2 },
  { "name": "A2M", "codeInclued": [["Space", control[1][5], control[0][1]]], "codeExclude": [], "codeMain": [control[1][5], control[0][1]], "src": I_a2m },
  { "name": "B2", "codeInclued": [[control[1][6], control[0][1]]], "codeExclude": ["Space"], "codeMain": [control[1][6], control[0][1]], "src": I_b2 },
  { "name": "C3", "codeInclued": [[control[1][0], control[0][2]]], "codeExclude": ["Space"], "codeMain": [control[1][0], control[0][2]], "src": I_c3 },
  { "name": "C3M", "codeInclued": [["Space", control[1][0], control[0][2]]], "codeExclude": [], "codeMain": [control[1][0], control[0][2]], "src": I_c3m },
  { "name": "D3", "codeInclued": [[control[1][1], control[0][2]]], "codeExclude": ["Space"], "codeMain": [control[1][1], control[0][2]], "src": I_d3 },
  { "name": "D3M", "codeInclued": [["Space", control[1][1], control[0][2]]], "codeExclude": [], "codeMain": [control[1][1], control[0][2]], "src": I_d3m },
  { "name": "E3", "codeInclued": [[control[1][2], control[0][2]]], "codeExclude": ["Space"], "codeMain": [control[1][2], control[0][2]], "src": I_e3 },
  { "name": "F3", "codeInclued": [[control[1][3], control[0][2]]], "codeExclude": ["Space"], "codeMain": [control[1][3], control[0][2]], "src": I_f3 },
  { "name": "F3M", "codeInclued": [["Space", control[1][3], control[0][2]]], "codeExclude": [], "codeMain": [control[1][3], control[0][2]], "src": I_f3m },
  { "name": "G3", "codeInclued": [[control[1][4], control[0][2]]], "codeExclude": ["Space"], "codeMain": [control[1][4], control[0][2]], "src": I_g3 },
  { "name": "G3M", "codeInclued": [["Space", control[1][4], control[0][2]]], "codeExclude": [], "codeMain": [control[1][4], control[0][2]], "src": I_g3m },
  { "name": "A3", "codeInclued": [[control[1][5], control[0][2]]], "codeExclude": ["Space"], "codeMain": [control[1][5], control[0][2]], "src": I_a3 },
  { "name": "A3M", "codeInclued": [["Space", control[1][5], control[0][2]]], "codeExclude": [], "codeMain": [control[1][5], control[0][2]], "src": I_a3m },
  { "name": "B3", "codeInclued": [[control[1][6], control[0][2]]], "codeExclude": ["Space"], "codeMain": [control[1][6], control[0][2]], "src": I_b3 },
  { "name": "C4", "codeInclued": [[control[1][0], control[0][3]]], "codeExclude": ["Space"], "codeMain": [control[1][0], control[0][3]], "src": I_c4 },
  { "name": "C4M", "codeInclued": [["Space", control[1][0], control[0][3]]], "codeExclude": [], "codeMain": [control[1][0], control[0][3]], "src": I_c4m },
  { "name": "D4", "codeInclued": [[control[1][1], control[0][3]]], "codeExclude": ["Space"], "codeMain": [control[1][1], control[0][3]], "src": I_d4 },
  { "name": "D4M", "codeInclued": [["Space", control[1][1], control[0][3]]], "codeExclude": [], "codeMain": [control[1][1], control[0][3]], "src": I_d4m },
  { "name": "E4", "codeInclued": [[control[1][2], control[0][3]]], "codeExclude": ["Space"], "codeMain": [control[1][2], control[0][3]], "src": I_e4 },
  { "name": "F4", "codeInclued": [[control[1][3], control[0][3]]], "codeExclude": ["Space"], "codeMain": [control[1][3], control[0][3]], "src": I_f4 },
  { "name": "F4M", "codeInclued": [["Space", control[1][3], control[0][3]]], "codeExclude": [], "codeMain": [control[1][3], control[0][3]], "src": I_f4m },
  { "name": "G4", "codeInclued": [[control[1][4], control[0][3]]], "codeExclude": ["Space"], "codeMain": [control[1][4], control[0][3]], "src": I_g4 },
  { "name": "G4M", "codeInclued": [["Space", control[1][4], control[0][3]]], "codeExclude": [], "codeMain": [control[1][4], control[0][3]], "src": I_g4m },
  { "name": "A4", "codeInclued": [[control[1][5], control[0][3]]], "codeExclude": ["Space"], "codeMain": [control[1][5], control[0][3]], "src": I_a4 },
  { "name": "A4M", "codeInclued": [["Space", control[1][5], control[0][3]]], "codeExclude": [], "codeMain": [control[1][5], control[0][3]], "src": I_a4m },
  { "name": "B4", "codeInclued": [[control[1][6], control[0][3]]], "codeExclude": ["Space"], "codeMain": [control[1][6], control[0][3]], "src": I_b4 },
  { "name": "C5", "codeInclued": [[control[1][0], control[0][4]]], "codeExclude": ["Space"], "codeMain": [control[1][0], control[0][4]], "src": I_c5 },
  { "name": "C5M", "codeInclued": [["Space", control[1][0], control[0][4]]], "codeExclude": [], "codeMain": [control[1][0], control[0][4]], "src": I_c5m },
  { "name": "D5", "codeInclued": [[control[1][1], control[0][4]]], "codeExclude": ["Space"], "codeMain": [control[1][1], control[0][4]], "src": I_d5 },
  { "name": "D5M", "codeInclued": [["Space", control[1][1], control[0][4]]], "codeExclude": [], "codeMain": [control[1][1], control[0][4]], "src": I_d5m },
  { "name": "E5", "codeInclued": [[control[1][2], control[0][4]]], "codeExclude": ["Space"], "codeMain": [control[1][2], control[0][4]], "src": I_e5 },
  { "name": "F5", "codeInclued": [[control[1][3], control[0][4]]], "codeExclude": ["Space"], "codeMain": [control[1][3], control[0][4]], "src": I_f5 },
  { "name": "F5M", "codeInclued": [["Space", control[1][3], control[0][4]]], "codeExclude": [], "codeMain": [control[1][3], control[0][4]], "src": I_f5m },
  { "name": "G5", "codeInclued": [[control[1][4], control[0][4]]], "codeExclude": ["Space"], "codeMain": [control[1][4], control[0][4]], "src": I_g5 },
  { "name": "G5M", "codeInclued": [["Space", control[1][4], control[0][4]]], "codeExclude": [], "codeMain": [control[1][4], control[0][4]], "src": I_g5m },
  { "name": "A5", "codeInclued": [[control[1][5], control[0][4]]], "codeExclude": ["Space"], "codeMain": [control[1][5], control[0][4]], "src": I_a5 },
  { "name": "A5M", "codeInclued": [["Space", control[1][5], control[0][4]]], "codeExclude": [], "codeMain": [control[1][5], control[0][4]], "src": I_a5m },
  { "name": "B5", "codeInclued": [[control[1][6], control[0][4]]], "codeExclude": ["Space"], "codeMain": [control[1][6], control[0][4]], "src": I_b5 },
  { "name": "C6", "codeInclued": [[control[1][0], control[0][5]]], "codeExclude": ["Space"], "codeMain": [control[1][0], control[0][5]], "src": I_c6 },
  { "name": "C6M", "codeInclued": [["Space", control[1][0], control[0][5]]], "codeExclude": [], "codeMain": [control[1][0], control[0][5]], "src": I_c6m },
  { "name": "D6", "codeInclued": [[control[1][1], control[0][5]]], "codeExclude": ["Space"], "codeMain": [control[1][1], control[0][5]], "src": I_d6 },
  { "name": "D6M", "codeInclued": [["Space", control[1][1], control[0][5]]], "codeExclude": [], "codeMain": [control[1][1], control[0][5]], "src": I_d6m },
  { "name": "E6", "codeInclued": [[control[1][2], control[0][5]]], "codeExclude": ["Space"], "codeMain": [control[1][2], control[0][5]], "src": I_e6 },
  { "name": "F6", "codeInclued": [[control[1][3], control[0][5]]], "codeExclude": ["Space"], "codeMain": [control[1][3], control[0][5]], "src": I_f6 },
  { "name": "F6M", "codeInclued": [["Space", control[1][3], control[0][5]]], "codeExclude": [], "codeMain": [control[1][3], control[0][5]], "src": I_f6m },
  { "name": "G6", "codeInclued": [[control[1][4], control[0][5]]], "codeExclude": ["Space"], "codeMain": [control[1][4], control[0][5]], "src": I_g6 },
  { "name": "G6M", "codeInclued": [["Space", control[1][4], control[0][5]]], "codeExclude": [], "codeMain": [control[1][4], control[0][5]], "src": I_g6m },
  { "name": "A6", "codeInclued": [[control[1][5], control[0][5]]], "codeExclude": ["Space"], "codeMain": [control[1][5], control[0][5]], "src": I_a6 },
  { "name": "A6M", "codeInclued": [["Space", control[1][5], control[0][5]]], "codeExclude": [], "codeMain": [control[1][5], control[0][5]], "src": I_a6m },
  { "name": "B6", "codeInclued": [[control[1][6], control[0][5]]], "codeExclude": ["Space"], "codeMain": [control[1][6], control[0][5]], "src": I_b6 },
  { "name": "C7", "codeInclued": [[control[1][0], control[0][6]]], "codeExclude": ["Space"], "codeMain": [control[1][0], control[0][6]], "src": I_c7 },
  { "name": "C7M", "codeInclued": [["Space", control[1][0], control[0][6]]], "codeExclude": [], "codeMain": [control[1][0], control[0][6]], "src": I_c7m },
  { "name": "D7", "codeInclued": [[control[1][1], control[0][6]]], "codeExclude": ["Space"], "codeMain": [control[1][1], control[0][6]], "src": I_d7 },
  { "name": "D7M", "codeInclued": [["Space", control[1][1], control[0][6]]], "codeExclude": [], "codeMain": [control[1][1], control[0][6]], "src": I_d7m },
  { "name": "E7", "codeInclued": [[control[1][2], control[0][6]]], "codeExclude": ["Space"], "codeMain": [control[1][2], control[0][6]], "src": I_e7 },
  { "name": "F7", "codeInclued": [[control[1][3], control[0][6]]], "codeExclude": ["Space"], "codeMain": [control[1][3], control[0][6]], "src": I_f7 },
  { "name": "F7M", "codeInclued": [["Space", control[1][3], control[0][6]]], "codeExclude": [], "codeMain": [control[1][3], control[0][6]], "src": I_f7m },
  { "name": "G7", "codeInclued": [[control[1][4], control[0][6]]], "codeExclude": ["Space"], "codeMain": [control[1][4], control[0][6]], "src": I_g7 },
  { "name": "G7M", "codeInclued": [["Space", control[1][4], control[0][6]]], "codeExclude": [], "codeMain": [control[1][4], control[0][6]], "src": I_g7m },
  { "name": "A7", "codeInclued": [[control[1][5], control[0][6]]], "codeExclude": ["Space"], "codeMain": [control[1][5], control[0][6]], "src": I_a7 },
  { "name": "A7M", "codeInclued": [["Space", control[1][5], control[0][6]]], "codeExclude": [], "codeMain": [control[1][5], control[0][6]], "src": I_a7m },
  { "name": "B7", "codeInclued": [[control[1][6], control[0][6]]], "codeExclude": ["Space"], "codeMain": [control[1][6], control[0][6]], "src": I_b7 },
  { "name": "C8", "codeInclued": [["Digit0"]], "codeMain": ["Digit0"], "src": I_c8 }
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
                  if (i.name.includes('M')) return <ConsoleButton {...i} style={[ConsoleButton.colorBW, ConsoleButton.rotate]} />
                  return <ConsoleButton {...i} style={[ConsoleButton.colorWB, ConsoleButton.rotate]} />
                })
              }
            </div>
          })
        }
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          control[0].map(i => i.replace('Key', '')).map(i => {
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
          control[1].map(i => i.replace('Key', '')).map(i => {
            return <ConsoleButton {...keyboardOption.find(i_ => i_.name === i)} stay={true} style={[ConsoleButton.colorWB]} />
          })
        }
      </div>
      
    </div>

  </div>
}

export default App