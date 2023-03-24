
import {shuffleArray,DogBuilder} from './dog.js'
import {likedDogs,dislikedDogs,dogData} from './data.js'

let availableDog =""
const dislike = document.getElementById('dislike')
const like = document.getElementById('like')

const dislikeAction = dislike.addEventListener('click',function(){
  like.classList.add('noHover')
  dislike.classList.add('red-background')
    availableDog.hasBeenSwiped = true
    dislikedDogs.push(availableDog)
    setTimeout(render,3000)
})
const likeAction = like.addEventListener('click',function(){
  dislike.classList.add('noHover')
  like.classList.add('green-background')
  availableDog.hasBeenSwiped = true
  availableDog.hasBeenLiked = true
  likedDogs.push(availableDog)
  setTimeout(render,3000)
})


  function render(){
    dislike.classList.remove('noHover', 'red-background')
    like.classList.remove('noHover', 'green-background')
    like.disabled = false
      shuffleArray(dogData)
       availableDog = new DogBuilder(dogData.shift())
      document.getElementById('dogZone').innerHTML = availableDog.getDogHtml() 
  }

render()





