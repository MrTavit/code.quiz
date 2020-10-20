var questions = [
    "This is the first question",
    "This is the second question",
    "This is the third question",
    "This is the fourth question",
    "This is the fifth question",
]
// Templates to hold questions and answers
var firstAnswer = [
    "This is choice A",
    "This is choice B",
    "This is choice C",
    "This is choice D"
]

var timer = document.querySelector(".timer")
var header = document.querySelector("#header")
var intro = document.querySelector("#intro")
var questionBox = document.querySelector("#question-box")
var startButton = document.querySelector("#start-button")
var interval

// Quiz start button event listener.
startButton.addEventListener('click', function(event){
    event.preventDefault()
    header.style.display = "none"
    startButton.style.display = "none"
    intro.style.display = "none"
    // Function that wll initiate the quiz
    timer.innerHTML = startTimer()
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

}