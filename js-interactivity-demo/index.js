console.log('My JavaScript is working')


// step 1 : grab an html element
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const counter = document.querySelector('#counter')
const themeBtn = document.querySelectorAll('.theme-buttons')

// step 2 : write out function we want to run
let count = 0

const increase = () => {
    // count = count +1 or 
    count++
    counter.textContent= count
    console.log(count)
}

const decrease = () => {
    count--
    counter.textContent= count
    console.log(count)
}

const reset = (event) => {
    console.log(event.target.id)
    count = 0
    counter.textContent= count
    console.log(count)
}

const selectTheme = (event) => {
    console.log(event.target.textContent)
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('').className = theme
    
}

for(let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click' , selectTheme)
// console.log(themeBtn[i].textContent)
}

// step 3 : combine steps 1 + 2 using an event listener

plusBtn.addEventListener('click' , increase)
minusBtn.addEventListener('click' , decrease)
resetBtn.addEventListener('click' , reset)

