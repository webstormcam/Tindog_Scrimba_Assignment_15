
import {dogData,likedDogs,dislikedDogs} from './data.js'
import {DogBuilder,shuffleArray} from './dog.js'

function dislike(currentDog){
    currentDog.hasBeenSwiped =true
    dislikedDogs.push(currentDog)
    render()
  }

  function like(currentDog){
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = true
    likedDogs.push(currentDog)
    render()
  }

const dislikeButton = document.getElementById('dislike').addEventListener('click',dislike)
const likeButton = document.getElementById('like').addEventListener('click',like)

let availableDog =""

function render(){
    shuffleArray(dogData)
     availableDog = new DogBuilder(dogData.shift())
    document.getElementById('dogZone').innerHTML = availableDog.getDogHtml() 
}

render()





