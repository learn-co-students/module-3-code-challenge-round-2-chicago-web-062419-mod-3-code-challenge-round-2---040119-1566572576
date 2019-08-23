fetch('http://localhost:3000/beers')
    .then(response => response.json())
    .then(json => {
        json.forEach((data) => {
                renderBeers(data)
        })
    })

    function renderBeers(beer) {
        let beerLi= document.createElement("li")
        let beerName = document.createElement("h1")
        let beerList = document.getElementById("list-group")
        
        beerName.innerText = beer.name 
        
        beerLi.append(beerName)
        beerList.appendChild(beerLi) 

        beerLi.addEventListener("click",renderAllDetails())
        
        
        function renderAllDetails(beer){
            let beerDetails = document.createElement("div")
            let beerDetail = document.getElementById("beer-detail")
            let beerDescription = document.createElement("textarea")
            let beerFirstBrewed = document.createElement("p")
            let beerImage = document.createElement("img")
            let beerTagline = document.createElement("h2")

            beerImage = beer.img_url 
            beerDescription = beer.description 
            beerFirstBrewed = beer.first_brewed 
            beerTagline = beer.tagline 
            beerDetails.append(beerDescription, beerFirstBrewed, beerImage) 

        }

        //editbeerdetails
        
        function editBeerDetails(){
            saveButton.addEventListener("submit", editBeerDetails())
            saveButton= document.createElement("button")
            saveButton.innerText= "Save"
            editField = document.createElement("input")
            let updatedInfo = editField.value 

            fetch('http://localhost:3000/beers',{
                method: "PATCH",
                headers: { "Content-Type" :applicatin/json},
                body: JSON.stringify({
                    description: updatedInfo.value  
                })

            })
        }
    }


    //I had issues adding things to my details div, however, I believe this is how I would have proceeded. 

        


    
    
    
            
