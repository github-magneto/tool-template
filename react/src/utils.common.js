const base64Audio = (audioFile, callback) => {
  var reader = new FileReader()
  reader.readAsDataURL(audioFile)
  reader.onload = () => {
    callback(reader.result)
  }
}

const includesArray = (a, b) => {
  return !a.some(i => !b.includes(i))
}

const agent = () => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return 'phone'
  } else {
    return 'pc'
  }
}

export { base64Audio, includesArray, agent }