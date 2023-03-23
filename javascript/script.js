
import {dogData,likedDogs,dislikedDogs} from './data.js'
import {DogBuilder,shuffleArray} from './dog.js'

let availableDog =""

function render(){
    shuffleArray(dogData)
    let availableDog = new DogBuilder(dogData.shift())
    document.getElementById('dogZone').innerHTML = availableDog.getDogHtml() 
}







render()





