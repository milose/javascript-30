const initDegrees = 90 // move hands to 12 o`clock
const tickDegrees = 360 / 60 // each tick in degrees

// Initalize all clock hands to 12
document.querySelectorAll('.hand').forEach(hand => {
  hand.style.transform = `rotate(${initDegrees}deg)`
})

// On time changed event handler
const timeChanged = () => {
  const now = new Date()

  moveHand(document.querySelector('.hand-second'), now.getSeconds())
  moveHand(document.querySelector('.hand-minute'), now.getMinutes())
  moveHand(document.querySelector('.hand-hour'), hourDegrees(now))
}

// Move specified hand by number of ticks
const moveHand = (hand, ticks) => {
  const moveBy = initDegrees + tickDegrees * ticks
  hand.style.transform = `rotate(${moveBy}deg)`
}

// Get the appropriate position for hour hand, including the progress from the minute hand
const hourDegrees = (now) => {
  const hours = now.getHours() % 12 || 12
  const offset = Math.floor(now.getMinutes() / 15) // get the offset for every 15 minutes

  return hours * 5 + offset
}

// Change hand position every second
setInterval(timeChanged, 1000)
