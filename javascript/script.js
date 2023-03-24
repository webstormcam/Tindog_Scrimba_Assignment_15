
import {shuffleArray,DogBuilder} from './dog.js'
import {likedDogs,dislikedDogs,dogData} from './data.js'

let availableDog =""
const dislike = document.getElementById('dislike')
const like = document.getElementById('like')

dislike.addEventListener('click',function(){
  like.classList.add('noHover')
  dislike.classList.add('red-background', 'noHover')
    availableDog.hasBeenSwiped = true
    document.getElementById('dogZone').innerHTML += '<img class="dislike-image decided-image" src="images/nope-image.png" alt="disliked-image"></img>'
    dislikedDogs.push(availableDog)
    console.log(dislikedDogs)
    setTimeout(render,3000)
   
})
like.addEventListener('click',function(){
  dislike.classList.add('noHover')
  like.classList.add('green-background', 'noHover')
  availableDog.hasBeenSwiped = true
  availableDog.hasBeenLiked = true
  document.getElementById('dogZone').innerHTML+='<img class="like-image decided-image" src="images/like-image.png" alt="like image">'
  likedDogs.push(availableDog)
  console.log(likedDogs)
  setTimeout(render,3000)
  
})


  function render(){
    dislike.classList.remove('noHover', 'red-background')
    like.classList.remove('noHover', 'green-background')
      shuffleArray(dogData)
       availableDog = new DogBuilder(dogData.shift())
      document.getElementById('dogZone').innerHTML = availableDog.getDogHtml() 
  }

render()





