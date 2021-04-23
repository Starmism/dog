function formSubmit() {
  window.confetti({
    particleCount: 300,
    spread: 180
  });
}



function updatePrice() {
  const daySelect = document.getElementById('dayselect')
  const packageSelect = document.getElementById('packageselect')
  const price = document.getElementById('price')
  let multiplier = 1.0
  let basePrice = 0.0

  switch (daySelect.options[daySelect.selectedIndex].value) {
    case 'Sunday':
      multiplier = 1.5
      break
    case 'Monday':
      multiplier = 10000.0
      break
    case 'Tuesday':
      multiplier = 1.2
      break
    case 'Wednesday':
      multiplier = 1.7
      break
    case 'Thursday':
      multiplier = 1.4
      break
    case 'Friday':
      multiplier = 2.3
      break
    case 'Saturday':
      multiplier = 2.0
      break
  }

  switch (packageSelect.options[packageSelect.selectedIndex].value) {
    case 'None':
      basePrice = 0.0
      break
    case 'One-Off Walk':
      basePrice = 19.99
      break
    case 'Daily Package Deal':
      basePrice = 159.99
      break
    case 'Weekly Package Deal':
      basePrice = 49.99
      break
    case 'Furry Friends Package':
      basePrice = 299.99
      break
    case 'Groups Galore Package':
      basePrice = 699.99
      break
  }

  price.innerText = 'Current Price: $' + (basePrice * multiplier).toFixed(2)
}