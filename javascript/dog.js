import { dislikedDogs, likedDogs } from "./data";

class DogBuilder{
    constructor(data){
        Object.assign(this,data)
    }

    getDogHtml(){
        const {name,avatar,age,bio} = this
        return `<img class="dog-pic" id="available-dog" src="${avatar}" alt="a dog with weird eyebrows">
        <div class="dog-info">
            <p class="dog-name-age">${name}, ${age}</p>
            <p class="dog-saying">${bio}</p>
        </div>`
    }
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
/// Set in the timer and disable all the buttons :) Plus lets work on the results section
  function dislike(currentDog){
    currentDog.hasBeenSwiped =true
    dislikedDogs.push(currentDog)
  }

  function like(currentDog){
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = true
    likedDogs.push(currentDog)
  }

export {DogBuilder,shuffleArray}


