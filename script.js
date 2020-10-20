var questions = [
    "This is the first question",
    "This is the second question",
    "This is the third question",
    "This is the fourth question",
    "This is the fifth question",
]
// Templates to hold questions and answers
var answers = [
{
    "0": "This is choice A",
    "1": "This is choice B",
    "2": "This is choice C",
    "3": "This is choice D"
},
{
    "0": "This is choice A",
    "1": "This is choice B",
    "2": "This is choice C",
    "3": "This is choice D"
},
{
    "0": "This is choice A",
    "1": "This is choice B",
    "2": "This is choice C",
    "3": "This is choice D"
},
{
    "0": "This is choice A",
    "1": "This is choice B",
    "2": "This is choice C",
    "3": "This is choice D"
},
{
    "0": "This is choice A",
    "1": "This is choice B",
    "2": "This is choice C",
    "3": "This is choice D"
}
]


var timer = document.querySelector(".timer")
var header = document.querySelector("#header")
var intro = document.querySelector("#intro")
var questionBox = document.querySelector("#question-box")
var questionCounter = 0
var answerBox = document.querySelector("#answer-box")
var choices
var startButton = document.querySelector("#start-button")
var interval

// Quiz start button event listener.
// When start is clicked
// Start timer
// Display question with choices
startButton.addEventListener('click', function(event){
    event.preventDefault()
    header.style.display = "none"
    startButton.style.display = "none"
    intro.style.display = "none"
    // Function that wll initiate the quiz
    timer.innerHTML = startTimer()
    renderQuestions()
    renderChoices()
})

// Start timer
// Keep counting down as long as timer is above 0
function startTimer() {
    var timer = 60
    if (timer > 0){
        interval = setInterval(function(){
            timer--
            return renderTimer(timer)
        }, 1000)
    } else {
        //When time reaches 0 end game
        // endGame()
    }
}

function renderTimer(num) {
    timer.innerHTML = num
    console.log(timer.innerHTML)
}

function renderQuestions(){
    if(questionCounter < questions.length)
    questionBox.innerHTML = questions[questionCounter]
    for (var i = 0; i < 4; i++){
    var item = document.createElement("button")
    item.setAttribute('class', 'btn-block')
    item.textContent = answers[questionCounter][i]
    answerBox.appendChild(item)
    
    }}


function renderChoices(){
    choices = "<ul>"
    answers.forEach(myFunction)
    choices += "</ul>"
}
function myFunction(value) {
    choices += "<li>" + value + "</li>";
  } 