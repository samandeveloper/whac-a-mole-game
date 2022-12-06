const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let startTime = 10
let stopTime = 0
let randomNumber;

//Generate the random number every 1000ms
let random = setInterval(function(){
  randomNumber = Math.floor((Math.random()*9))  //random number between 0 and 8
  if(startTime === 0){
    clearInterval(random)
  }
},1000)

//Timer count down
let countDown = setInterval(function(){
  if(startTime <= 0){    
    clearInterval(countDown)
  }
    timeLeft.innerHTML = startTime
    if(startTime > stopTime){
      startTime--
  }
  checkScore()
},1000)

//Mole moves in the square randomly--this moves ends when timer ends
let moleInSquarMoves = setInterval(function(){
  if(startTime >= 0){
    squares[randomNumber].classList.add("mole")     //every 1000ms mole moves in the squares
    setTimeout(function(){    //after 700ms the classList should be removed
      if(startTime >= 0){
      squares[randomNumber].classList.remove("mole")
      }
    },700)
    if(startTime === 0){
      clearInterval(moleInSquarMoves)
    }
  }
},1000) 

//User clicks
squares.forEach(function(square){
  square.addEventListener("click", function(){
    if(square.classList.contains("mole")){
      console.log("mole clicked")
      result++
      score.textContent = result
    }
  })
})

// check score
function checkScore(){
  if(timeLeft.innerHTML === "0"){   
    console.log("timeleft = 0")
    alert(`Game over! your score is ${result}`)
  }
}
 

