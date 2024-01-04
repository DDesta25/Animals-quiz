var feedback = document.querySelector("#feedback");
var questionIndex = 0;
console.log(question);
const intro = document.querySelector(".intro");
const start = document.querySelector(".start-bt");
const quiz = document.querySelector(".quiz");
const time = document.querySelector(".seconds");
const questionTitleEL = document.querySelector(".question");
const answer = document.querySelector(".answer-btn");
console.log(feedback);
let secondsLeft = 10;
start.addEventListener("click", function () {
  console.log("button was clicked");
  quiz.classList.remove("hide");
  intro.classList.add("hide");
  setTime();
  getQuestion();
});
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}
function getQuestion() {
  var currentQuestion = question[questionIndex];
  console.log(currentQuestion);

  questionTitleEL.textContent = currentQuestion.title;
  answer.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var singleChoice = currentQuestion.choices[i];
    console.log(singleChoice);
    var choiceElement = document.createElement("button");
    choiceElement.setAttribute("value", singleChoice);
    choiceElement.textContent = singleChoice;
    choiceElement.onclick = answerClick;
    answer.appendChild(choiceElement);
  }
}
function answerClick(event) {
  var buttonClick = event.target;
  // if (!buttonClick.matches(".answer")) {
  //   return;
  // }
  if (buttonClick.value !== question[questionIndex].answers) {
    console.log("value" + buttonClick.value);
    console.log("answer" + question[questionIndex].answers);
    secondsLeft -= 15;
    time.textContent = secondsLeft;
    feedback.classList.remove("hide");
    feedback.textContent = "oops";
  } else {
    feedback.classList.remove("hide");
    feedback.textContent = "right on";
  }
  setTimeout(function () {
    feedback.classList.add("hide");
  }, 500);
  questionIndex++;
  getQuestion();
}

// create function when you select a question
// create function when quiz ends, remember to clear timer
//  create a function when saving high scores
// create an event listener when you click the choice and also submitting high score

// answer.addEventListener("click", console.log("i did it"));
