const inputs = document.querySelectorAll('.controls input')

// Event handler
const onChange = (input) => {
  const unit = input.dataset.unit || ''
  document.documentElement.style
    .setProperty(`--${input.name}`, input.value + unit)
}

// Set the default input values from CSS vars
inputs.forEach((input) => {
  const valueFromCssVar = window.getComputedStyle(document.documentElement).getPropertyValue(`--${input.name}`)
  const unit = input.dataset.unit || ''

  input.value = valueFromCssVar.trim()
    .replace(unit, '') // if applicable, replace the unit identifier
})

// List all events
'change mousemove'.split(' ')
  .forEach(event => {
    // add each event for all inputs
    inputs.forEach(input => {
      input.addEventListener(event, onChange.bind(null, input))
    })
  })
