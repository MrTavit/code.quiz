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

var startButton = document.querySelector("#start-button")
var header = document.querySelector("#header")
var intro = document.querySelector("#intro")


// Quiz start button event listener.
startButton.addEventListener('click', function(event){
    event.preventDefault()
    console.log(startButton)
    header.style.display = "none"
    startButton.style.display = "none"
    intro.style.display = "none"
    // Function that wll initiate the quiz
    // startQuiz()
})

