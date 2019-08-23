const url = `http://localhost:3000/beers`
const listGroup = document.querySelector('#list-group')
const beerDetail = document.getElementById('beer-detail')

const fetchBeers = () => {
    fetch(url)
      .then(resp => resp.json())
      .then(beerData => renderBeers(beerData))
}

const renderBeers = (beerData) => {
    beerData.forEach(beer => {
       const singleBeer = document.createElement('li')
       singleBeer.className = "list-group-item"
       singleBeer.innerText = beer.name
       singleBeer.addEventListener('click', {
           fetchBeerShow()
       })

       listGroup.append(singleBeer)
        })
       }   
    
const fetchBeerShow = () => {
    fetch(`http://localhost:3000/beers/${beer.id}`)
      .then(resp => resp.json())
      .then(beerShow => renderBeerShow(beerShow))
}

const renderBeerShow = (beerShow) => {
    beerShow.forEach(beer => {
      oneBeer = document.createElement('div')

      oneBeerName = document.createElement('h1')
      oneBeerName.innerText = beer.name

      oneBeerImage = document.createElement('img')
      oneBeerImage.src = beer.image_url

      oneBeerTagline = document.createElement('h3')
      oneBeerTagline.innerText = beer.tagline

      oneBeerDescription = document.createElement('textarea')
      oneBeerDescription.innerText = beer.description

      oneBeerEditButton = document.createElement('button')
      oneBeerEditButton.className = "btn btn-info"
      oneBeerEditButton.innerText = "save"
      oneBeerEditButton.addEventListener('submit', {
          editBeerDetails()
      })

    oneBeer.append(oneBeerName, oneBeerImage, oneBeerTagline, oneBeerDescription, oneBeerEditButton)
    beerDetail.append(oneBeer)
})

const editBeerDetails = () => {
    const newDescription = document.querySelector('.textarea').value

    const singleUrl = `http://localhost:3000/beers/${beer.id}`
    const reqObj = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body: JSON.stringify({
          description: newDescription
        })
    }
      fetch(singleUrl, reqObj)
        .then(resp => resp.json())
        .then(details => fetchBeers([details]))
      
}

fetchBeers()
}
