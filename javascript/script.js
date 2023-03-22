
import dogData from './data.js'
import DogBuilder from './dog.js'

let availableDog = new DogBuilder(dogData[2])

document.getElementById('dogZone').innerHTML = availableDog.getDogHtml() 
