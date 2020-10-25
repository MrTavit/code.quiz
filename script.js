var questions = [
    "This is the first question",
    "This is the second question",
    "This is the third question",
    "This is the fourth question",
    "This is the fifth question",
]

// const questions = [
//     {
//         question: "First question",
//         a: 'a',
//         b: 'b',
//         c: 'c',
//         d: 'd',
//         answer: 'd'
//     },
// ]
// Templates to hold questions and answers
var answers = [
    {
        "0": "This is choice A",
        "1": "This is choice B",
        "2": "This is choice C",
        "3": "This is choice D"
    },
    {
        "0": "This is question 2",
        "1": "This is choice B",
        "2": "This is choice C",
        "3": "This is choice D"
    },
    {
        "0": "This is question 3",
        "1": "This is choice B",
        "2": "This is choice C",
        "3": "This is choice D"
    },
    {
        "0": "This is question 4",
        "1": "This is choice B",
        "2": "This is choice C",
        "3": "This is choice D"
    },
    {
        "0": "This is question 5",
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
var startButton = document.querySelector("#start-button")
var interval
var score
var correctQuestions = 5
var inputForm = document.querySelector('#input-form')
var submitButton = document.querySelector('#submit')
var scoreBoard = document.querySelector('#scoreboard')
var restartButton = document.querySelector("#restart-button")
var clearScores = document.querySelector("#clear-scores")
var highScores = []


function init() {
    inputForm.style.display = "none"
    restartButton.style.display = "none"
    clearScores.style.display = "none"
    // header.style.display = "block"
    // startButton.style.display = "block"
    // intro.style.display = "block"
}

init()
// Quiz start button event listener.
// When start is clicked
// Start timer
// Display question with choices
startButton.addEventListener('click', function (event) {
    event.preventDefault()
    header.style.display = "none"
    startButton.style.display = "none"
    intro.style.display = "none"
    // Function that wll initiate the quiz
    timer.innerHTML = startTimer()
    renderQuestions()
})

// Start timer
// Keep counting down as long as timer is above 0 and there are more questions available
var timeLeft = 60
function startTimer() {
    interval = setInterval(function () {
        if (timeLeft > 0 && questionCounter < questions.length) {
            timeLeft--
            renderTimer(timeLeft)
        } else if (timeLeft <= 0) {
            score = 0
            correctQuestions -= (questions.length - questionCounter)
            clearInterval(interval)
            enterInitials()
        }
        else {
            //When time reaches 0, or there are no more questions end game
            score = timeLeft
            clearInterval(interval)
            enterInitials()
            // - function for entering initials when time is up or last question is reached
        }
    }, 1000)
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault()

    // Run when submit button is clicked
    // Save content in input box to local storage with score
    // Display initials with score to user in a list
    // Have go back button
    // Have button to clear list (local storage)
    
    var userScore = document.querySelector(`#input-box`).value.trim()
    
    if (userScore === '') {
        return
    }
    // Add new highscore to highscore array, clear input
    highScores.push(`${userScore}: ${score}`)
    document.querySelector(`#input-box`).value = ""
    // save high score to local storage
    // render high scores from local storage
    storeScores()
    saveInitials()
})


function enterInitials() {
    //Game over screen
    questionBox.innerHTML = "Game over!"
    // Show the final score
    if (correctQuestions === 1) {
        answerBox.innerHTML = `You got ${correctQuestions} question correct.<br>Your time remaining was: ${score}<br>`
    } else {
        answerBox.innerHTML = `You got ${correctQuestions} questions correct.<br>Your time remaining was: ${score}<br>`
    }
    inputForm.style.display = "block"

    // Initials and score are recorded in high score list
    // High score list is shown 
    // Go back button returns to the game
    // Clear highscores button clears the list 
}

function storeScores() {
    localStorage.setItem('highscores', JSON.stringify(highScores))
}

function renderScores() {
    questionBox.innerHTML = 'High Scores'
    answerBox.innerHTML = ""
    inputForm.style.display = 'none'
    scoreBoard.style.display = 'block'
    clearScores.style.display = "block"
    restartButton.style.display = "block"

    for (var i = 0; i < highScores.length; i++) {
        var newScore = highScores[i]

        var li = document.createElement('li')
        li.textContent = newScore

        scoreBoard.appendChild(li)
    }
}

function saveInitials() {
    // Get stored scores from local storage
    var storedScores = JSON.parse(localStorage.getItem('highscores'))

    if (storedScores !== null) {
        highScores = storedScores
    }
    renderScores()
}

function renderTimer(num) {
    timer.innerHTML = num
    if (num <= 0) {
        timer.innerHTML = 0
    }
}

function renderQuestions() {

    // Resets the answerBox to an empty string
    answerBox.innerHTML = ""

    // counter for questions asked vs total number of questions    
    if (questionCounter < questions.length) {

        // change HTML of questionBox to question based on counter
        questionBox.innerHTML = questions[questionCounter]

        // Creates buttons for answer choices
        // hard coded for 4 choices
        for (var i = 0; i < 4; i++) {
            var item = document.createElement("button")
            // Set classes to buttons for formatting
            // id is set to the index, for keeping score later
            item.setAttribute('class', 'btn-block btn-primary')
            item.setAttribute('id', `choice${(i + 1)}`)

            // Sets click function to buttons as they are generated
            item.addEventListener('click', function (event) {
                event.preventDefault()
                checkAnswer(event)
                renderQuestions()
            })

            // Text content of button is answers object, with the question counter and incrementer as arguments
            item.textContent = answers[questionCounter][i]
            answerBox.appendChild(item)

        }
    }
}


function checkAnswer(event) {
    var choice = event.target.id
    // check question number
    // First question, answer has id choice3.
    if (questionCounter === 0 && choice !== 'choice3') {
        // compare clicked choice to correct answer
        // if incorrect answer decrease timer
        wrongAnswer()
    }
    if (questionCounter === 1 && choice !== 'choice2') {
        wrongAnswer()
    }
    if (questionCounter === 2 && choice !== 'choice4') {
        wrongAnswer()
    }
    if (questionCounter === 3 && choice !== 'choice1') {
        wrongAnswer()
    }
    if (questionCounter === 4 && choice !== 'choice3') {
        wrongAnswer()
    }
    // After checking answer, increment to next question
    // Rerender timer
    questionCounter++
    renderTimer(timeLeft)
}

// Simple function to lower the timer and reduce the number of correct questions
function wrongAnswer() {
    timeLeft -= 15
    correctQuestions--
}

restartButton.addEventListener('click', function(){
    location.reload()
})

clearScores.addEventListener('click', function(){
    localStorage.clear('highscores')
    scoreBoard.innerHTML = ''
})