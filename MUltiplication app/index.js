const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)


const questionEl = document.getElementById("question")
questionEl.innerText = `What is ${num1} multiply ${num2}?`

const inputEl = document.getElementById("input")

let score = JSON.parse(localStorage.getItem("score"))



if(!score){
      score = 0
}
const formEl = document.getElementById("form")

const scoreEl = document.getElementById("score")

scoreEl.innerText = `score:${score}`
const correctAns = num1 * num2


form.addEventListener("submit", ()=>{
      const userAns = +inputEl.value
      if(userAns === correctAns){
            score++
            updateLocalStorage()
      }else{
            score--
            updateLocalStorage()
      }
})

function updateLocalStorage(){
      localStorage.setItem("score",JSON.stringify(score))
}

