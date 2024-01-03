
var questionIndex=0
const intro = document.querySelector(".intro");
const start = document.querySelector(".start-bt");
const quiz = document.querySelector(".quiz");
const time = document.querySelector(".seconds")
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
 
}
getQuestion()