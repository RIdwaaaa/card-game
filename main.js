let first = document.querySelector('.first')
let second = document.querySelector('.second')
let sum = document.querySelector('.sum')

let randomNumber = Math.floor(Math.random()*14)
let randomNumber2 = Math.floor(Math.random()*14)
first.innerHTML = randomNumber
second.innerHTML = randomNumber2
sum.innerHTML = randomNumber +randomNumber2