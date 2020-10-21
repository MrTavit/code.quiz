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
var choices
var startButton = document.querySelector("#start-button")
var interval
var score

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
    // renderChoices()
})

// Start timer
// Keep counting down as long as timer is above 0
function startTimer() {
    var timer = 10
    interval = setInterval(function () {
        if (timer > 0 && questionCounter < questions.length) {
            timer--
            // console.log(timer)
            return renderTimer(timer)
        } else {
            //When time reaches 0 end game
            score = timer
            clearInterval(interval)
            console.log("Time's up!")
            enterInitials() 
            // - function for entering initials when time is up or last question is reached
        }
    }, 1000)
}

function enterInitials() {
    //Game over screen
    questionBox.innerHTML = "Game over!"
    // Show the final score
    answerBox.innerHTML = `Your final score was ${score}<br>`
    // Entry box to enter players initials and a submit button
    var el = document.createElement('div')
    console.log(el)
    el.innerHTML = (`Enter initials: <input placeholder = "AJC"></input> <button>Submit</button>`)
    // el.setAttribute('class', 'btn-primary')
    answerBox.appendChild(el)
    // When submit is clicked, initials are paired with score
    // Initials and score are recorded in high score list
    // High score list is shown 
        // Go back button returns to the game
        // Clear highscores button clears the list 
}

function renderTimer(num) {
    timer.innerHTML = num
}

function renderQuestions() {

    // Resets the answerBox to an empty string
    answerBox.innerHTML = ""

    // counter for questions asked vs total number of questions    
    if (questionCounter < questions.length) {

        // change HTML of question to question based on counter
        questionBox.innerHTML = questions[questionCounter]

        // Creates buttons for answer choices
        // hard coded for 4 choices
        for (var i = 0; i < 4; i++) {
            var item = document.createElement("button")
            // Set classes to buttons for formatting
            // id is set to the index, for keeping score later
            item.setAttribute('class', 'btn-block btn-primary')
            item.setAttribute('id', `choice${(i + 1)} `)

            // Sets click function to buttons as they are generated
            item.addEventListener('click', function(event){
                event.preventDefault()
                questionCounter++
                renderQuestions()
            })

            // Text content of button is answers object, with the question counter and incrementer as arguments
            item.textContent = answers[questionCounter][i]
            answerBox.appendChild(item)

        }
    }
}
// Click event listener added to the answer box.
// When one of the options in the answer box is selected, the next question will be displayed

// Change to only work when clicking on one of the choice buttons
// answerBox.addEventListener('click', function (event) {
//     event.preventDefault()
//     questionCounter++
//     renderQuestions()
// })

