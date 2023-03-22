class Dog{
    constructor(data){
        Object.assign(this,data)
    }

    getDogHtml(){
        const {name,avatar,age,bio,hasBeenSwiped,hasBeenLiked} = this
        return `<img class="dog-pic" id="available-dog" src="images/dog-teddy.jpg" alt="a dog with weird eyebrows">
        <div class="dog-info">
            <p class="dog-name-age">Teddy, 30</p>
            <p class="dog-saying">How you doin?</p>
        </div>`
    }
}


