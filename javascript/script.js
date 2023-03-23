
import dogData from './data.js'
import DogBuilder from './dog.js'

let availableDog =""

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

function render(){
    shuffleArray(dogData)
    let availableDog = new DogBuilder(dogData.shift())
    document.getElementById('dogZone').innerHTML = availableDog.getDogHtml() 
}

const dislike =(currentDog) =>{

}





render()





