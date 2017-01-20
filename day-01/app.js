const keyClass = 'key'
const keys = [].slice.call(document.querySelectorAll(`.${keyClass}`))

window.addEventListener('keyup', playSound)

function playSound (e) {
  keys
    .filter(key => Number(key.dataset.key) === e.keyCode)
    .forEach(key => {
      const audio = document.querySelector(`audio[data-key="${key.dataset.sound}"]`)

      // Animate
      key.classList.add((audio) ? 'playing' : 'missing')

      // Also play the file
      if (audio) {
        audio.currentTime = 0
        audio.play()
      }
    })
}

// Reset the element after transition ends
keys.forEach(key => {
  key.addEventListener('transitionend', resetKeyClass)
})

function resetKeyClass (e) {
  // Skip all transitions except transform
  if (e.propertyName !== 'transform') return

  // Reset the className
  this.className = keyClass
}
