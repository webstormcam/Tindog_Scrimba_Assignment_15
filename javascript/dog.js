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

export default DogBuilder


