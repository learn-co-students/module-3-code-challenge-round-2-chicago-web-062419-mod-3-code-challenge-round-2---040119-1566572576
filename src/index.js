const URL = 'http://localhost:3000/beers'
const listContainer = document.getElementById('list-group')
const beerDetails = document.getElementById('beer-detail')



const fetchBeers = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(beers => {
        for(const beer of beers) {
            makeBeerList(beer)
        }
    })
}


const makeBeerList = (beer) => {
    console.log(beer)
    let beerUl = document.createElement('ul')
    beerUl.className = "list-group"
    let li = document.createElement('li')
    li.className = "list-group-item"
    li.innerText = beer.name
    let infoButton = document.createElement('button')
    beerUl.appendChild(li)
    li.append(infoButton)
    infoButton.innerHTML = 'Beer Profile'
    listContainer.appendChild(beerUl)

    infoButton.addEventListener('click', (event) => {
        beerDetails.innerHTML = ''

        let beerName = document.createElement('h1')
        beerName.innerText = beer.name 
        let image = document.createElement('img')
        image.src = beer.image_url
        let tagline = document.createElement('h3')
        tagline.innerText = beer.tagline
        let beerDescription = document.createElement('textarea')
        beerDescription.innerText = beer.description

        let saveButton = document.createElement('button')
        saveButton.className = 'btn btn-info'
        saveButton.id = 'edit-beer'
        saveButton.innerText = 'Save'


        saveButton.addEventListener('click', () => {
            // event.preventDefault()
            let newDescription = beerDescription.value
            beerDescription.innerText = newDescription
            console.log(beerDescription)
            // beerDescription.innerText = newDescription

            fetch(`${URL}/${beer.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    description: newDescription
                })  
            })
    
        })

        beerDetails.append(beerName, image, tagline, beerDescription, saveButton)

    })
}



fetchBeers()


// beers render pessimistically, I have a theory that on line 32 when I clear the HTML to render a new beer, it is clearing that data. But the data persists after a refresh, so it hit the database. 