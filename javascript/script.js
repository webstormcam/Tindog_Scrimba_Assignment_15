
import {shuffleArray,DogBuilder} from './dog.js'
import {likedDogs,dislikedDogs,dogData} from './data.js'

let availableDog =""
const dislike = document.getElementById('dislike')
const like = document.getElementById('like')

dislike.addEventListener('click',function(){
  like.classList.add('noHover')
  dislike.classList.add('red-background', 'noHover')
    availableDog.hasBeenSwiped = true
    document.getElementById('dogZone').innerHTML += '<img class="dislike-image  decided-image " src="images/nope-image.png" alt="disliked-image"></img>'
    dislikedDogs.push(availableDog)
    if(dogData.length>0){
      setTimeout(render,3000)
      console.log(dogData)
    } else{
      setTimeout(renderEnding,3000)
    }
   
})
like.addEventListener('click',function(){
  dislike.classList.add('noHover')
  like.classList.add('green-background', 'noHover')
  availableDog.hasBeenSwiped = true
  availableDog.hasBeenLiked = true
  document.getElementById('dogZone').innerHTML+='<img class="like-image  decided-image " src="images/like-image.png" alt="like image">'
  likedDogs.push(availableDog)
  if(dogData.length>0){
    setTimeout(render,3000)
    console.log(dogData)
  } else{
    setTimeout(renderEnding,3000)
  }
  
  
})


  function render(){
    dislike.classList.remove('noHover', 'red-background')
    like.classList.remove('noHover', 'green-background')
      shuffleArray(dogData)
       availableDog = new DogBuilder(dogData.shift())
      document.getElementById('dogZone').innerHTML = availableDog.getDogHtml() 
  }



  function renderEnding(){
    document.getElementById('middleBottomArea').innerHTML = `
    <div class="your-likes">
    <h1>LIKED DOGGIES</h1>
    ${displayLikedProfiles()}
    </div>`
  }


  function displayLikedProfiles(){
    let likedDoggies =''
    for(const liked of likedDogs){
      likedDoggies+=`
      <div class="liked-dog">
      <div class="dog-image-section">
      <img class="round-profile-image" src="${liked.avatar}">
      </div>
      <div class="profile-words">
      <p class="dog-name">${liked.name}</p>
      <p class="dog-saying">${liked.bio}</p>
      </div>
      </div>
      
      `
    }
    return likedDoggies
  }

render()





