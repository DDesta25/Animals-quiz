
var questionIndex=0
console.log(question) 
const intro = document.querySelector(".intro");
const start = document.querySelector(".start-bt");
const quiz = document.querySelector(".quiz");
const time = document.querySelector(".seconds")
const questionCurrent = document.querySelector(".question")
const answer = document.querySelector(".answer-btn")
let secondsLeft = 10;
start.addEventListener("click", function () {
    console.log("button was clicked")
    quiz.classList.remove("hide");
    intro.classList.add("hide");
    setTime()
});
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = secondsLeft 
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
       
      }
  
    }, 1000);

  }
function getQuestion() {
  var currentQuestion = question[questionIndex]
  console.log(currentQuestion)
  var questionTitle = document.getElementsByClassName("question")
  questionTitle.textContent = currentQuestion.title
  answer.innerHTML = "" 
  for (let i = 0; i < currentQuestion.choices.length; i++) {
   var singleChoice= currentQuestion.choices[i]
   console.log(singleChoice)
   var choiceElement = document.createElement("button");
   choiceElement.setAttribute("value",singleChoice)
   choiceElement.textContent = i+1+singleChoice
   answer.appendChild(choiceElement)
  }
}
getQuestion()
// create function when you select a question
// create function when quiz ends, remember to clear timer
//  create a function when saving high scores
// create an event listener when you click the choice and also submitting high score 