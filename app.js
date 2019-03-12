let getAllOrders = document.getElementsByClassName("getAllOrders")[0]
let user = document.getElementsByClassName("user")[0]

getAllOrders.addEventListener('click',function(){

let url = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
  console.log(JSON.stringify(url))

  fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/')
.then(function(response){
  return response.json()
}).then(function(json){
  console.log(json)
  let keys = Object.keys(json)
  console.log(keys)

  let userData = keys.map(function(key) {
    let order = json[key]
    return `<div>
            <span>${order.emailAddress}</span>
            <span>${order.coffee}</span>
            </div>`
            // <li>${movie.Type}</li>
            // <li>${movie.Year}</li>
            // <li>${movie.imdbID}</li>
  })

  user.innerHTML = userData.join('')

})


})


// add coffee order
let btnPost = document.getElementById("btnPost")
let emailAddress = document.getElementById('emailAddress')
let coffee = document.getElementById('coffee')

btnPost.addEventListener('click',function(){

  let userInput = {emailAddress: emailAddress.value, coffee: coffeeType.value}

  console.log(JSON.stringify(userInput))

  fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userInput)
}).then(function(response){
  return response.json()
}).then(function(json){
  console.log(json)
})
})





// Delete order
let dltPost = document.getElementById("dltPost")
dltPost.addEventListener('click',function(){

  let userInput = emailAddress.value

  console.log(JSON.stringify(userInput))

  fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/'
  + userInput, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(function(response){
  return response.json()
}).then(function(json){
  console.log(json)
})
})


let search = document.getElementById('search')
let usersCoffee = document.getElementById('usersCoffee')
let emailAddress2 = document.getElementById("emailAddress2")

search.addEventListener('click',function(){

let url = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
  console.log(JSON.stringify(url))

  let userInput2 = emailAddress2.value

  fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/'+ userInput2)
  .then(function(response){
  return response.json()
  }).then(function(json){
  console.log(json)

  let keys = Object.keys(json)
  console.log(keys)


  usersCoffee.innerHTML = `<div>
          <span>${json.coffee}</span>
          </div>`

})


})
