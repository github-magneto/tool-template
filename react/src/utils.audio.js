class AudioControl {
  constructor() {
    this.audios = new Array(16).fill().map(i => {
      const audio = new Audio()
      audio.playing = false
      audio.onended = () => audio.playing = false
      return audio
    })
  }

  play(src, volume) {
    const audio = this.audios.find(i => !i.playing)
    
    if (!audio) return

    audio.playing = true
    audio.src = src
    audio.volume = volume
    audio.play()
  }
}

const InstanceAudioControl = new AudioControl()

export { InstanceAudioControl as AudioControl }