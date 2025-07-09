//dichiaro le variabili per recuperare gli elemenmti dal DOM
const button = document.querySelector('.my-button')
const bulb = document.getElementById('bulb')
//Creo un evento al click del bottone
button.addEventListener('click', function () {
  //controllo se la lampadina ha la classe 'off'
  if (bulb.classList.contains('off')) {
    // se sì, cambio la classe in 'on' e cambio l'immagine e il testo del bottone in "Spegni"
    bulb.classList.remove('off')
    bulb.classList.add('on')
    bulb.src = './assets/img/yellow_lamp.png'
    button.textContent = 'Spegni'
  } else {
    // altrimenti, cambio la classe in 'off' e cambio l'immagine e il testo del bottone in "Accendi"
    bulb.classList.remove('on')
    bulb.classList.add('off')
    bulb.src = './assets/img/white_lamp.png'
    button.textContent = 'Accendi'
  }
})