// Variable definition

const beersUrl = `http://localhost:3000/beers`
const beerList = document.getElementById('list-group')
const beerDetail = document.getElementById('beer-detail')



const createBeerList = () => {
  fetch(beersUrl)
  .then(resp => resp.json())
  .then(beersData => addBeer(beersData))
}

// Function to create an li for each beer in the list

function addBeer(beersData) {
  beersData.forEach(beer => {
    createLiBeer = document.createElement("li")
    createLiBeer.className = 'list-group-item'
    createLiBeer.innerHTML = beer.name
    createLiBeer.id = beer.id
    beerList.appendChild(createLiBeer)
  })
}

// Add event Listener to beer list



beerList.addEventListener('click', () => {
  const beerId = event.srcElement.id
  let beerUrl = `http://localhost:3000/beers/${beerId}`
  console.log(beerUrl)
  const beerDetailData = () => {
    fetch(beerUrl)
    .then(resp => resp.json())
    .then(beerData => {
      listBeerDetail(beerData)
      console.log(beerData)
    })
  }
  // beerDetailData()
  function listBeerDetail(beerData) {
    beerData.forEach(beer => {
      const beerName = document.createElement('h1')
      const beerImg = document.createElement('img')
      const beerTagline = document.createElement('h3')
      const textArea = document.createElement('textarea')
      const beerBtn = document.createElement('button')
      beerName.innerText = beer.name
      beerImg.src = beer.image_url
      beerTagline = beer.tagline
      textArea = beer.description
      beerBtn.id = 'edit-beer'
      beerBtn.className = 'btn btn-info'
      beerDetail.appendChild(beerName)
      beerDetail.appendChild(beerImg)
      beerDetail.appendChild(beerTagline)
      beerDetail.appendChild(textArea)
      beerDetail.appendChild(beerBtn)
    })
    beerDetailData(); 
  } 
})

post fetch

beerBtn.addEventListener('click', postNewDescription)

function postNewDescription () {


  let beerPostData = {
    description: `${textArea.value}` 
  };
  
  let configObjBeer = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(beerPostData)
  };
  
  function postNewDescription() {
  
    fetch(beerUrl, configObjBeer)
  
    .then(function(response){
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Ooops, you did it again");
      console.log(error.message);
    })
  }
}

createBeerList()