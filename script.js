console.log(`working`)
let button = document.querySelector("#searchButton")

//use Event as a parameter

async function getData (theEvent) {
    //to prevent the default behavior browser to loop and refresh/restart after each run
    theEvent.preventDefault()
    let textInput = document.querySelector("#inputBar").value

    fetch(`https://pokeapi.co/api/v2/pokemon/${textInput}`)

    .then (res => {
        return res.json()
    })

    .then(res => {
        console.log(res)

        let picture = document.querySelector("#picture")
        picture.setAttribute("src", res.sprites.front_default);
        

        console.log(`Name!`, res.name)
        let pokemonName = document.querySelector("#pokemonName")
        pokemonName.innerText = res.name.toUpperCase()

        console.log(`Number!`, res.id)
        let pokemonNumber = document.querySelector("#number")
        pokemonNumber.innerText = res.id

        console.log(`Height!`, res.height)
        let height = document.querySelector("#height")
        height.innerText = res.height

        console.log(`Weight!`, res.weight)
        let weight = document.querySelector("#weight")
        weight.innerText = res.weight

        console.log(`Types!`, res.types)
        let types = document.querySelector("#types")
        types.innerText = ``
        for(let i=0; i<res.types.length; i++){
            types.innerText = (`${types.innerText} - ` + res.types[i].type.name)}

        console.log(`Held Items!`, res.held_items)
        let items = document.querySelector("#items")
        items.innerText = ``
        for(let i=0; i<res.held_items.length; i++){
        items.innerText = (`${items.innerText} - ` + res.held_items[i].item.name)}

        console.log(`Abilities!`, res.abilities)
        
        let pokemonAbilities = document.querySelector("#abilities")
        pokemonAbilities.innerText = ``
        for(let i=0; i<res.abilities.length; i++){
            pokemonAbilities.innerText = 
            (`${pokemonAbilities.innerText} - ` + res.abilities[i].ability.name)
            //since abilities is an array, we need abilities[]
            //since ability and name are objects, can just use the dot notation
            //console.log(pokemonAbilities.innerText)

        }
    })

    .catch(err => {
        console.log(`Error!`, err)
    })
}

//1 attach event to button
button.addEventListener("click", getData)
//2 read the input bar variable/value
//3 find the html element we want to pooulate
//4 populate element,r ender data on screen
//5 profit